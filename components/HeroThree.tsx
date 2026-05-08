'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function HeroThree() {
  const t_hero = useTranslations('Hero')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Typewriter effect state
  const [typedWord, setTypedWord] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const typeWords = useMemo(() => ['Scale Fast', 'Build Marketplaces', 'SaaS Dashboards'], [])

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return
    const container = containerRef.current
    const W = container.clientWidth
    const H = container.clientHeight

    // Detect mobile for optimization
    const isMobile = window.innerWidth < 768
    
    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true
    })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x111111, 1)

    // SCENE + CAMERA
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x111111, 0.07)
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.set(0, 0, 5)

    // === GOLD PARTICLE FIELD ===
    const particleCount = isMobile ? 400 : 1200
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    const pgeo = new THREE.BufferGeometry()
    pgeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pmat = new THREE.PointsMaterial({
      color: 0xFF5C00, size: isMobile ? 0.06 : 0.04, transparent: true, opacity: 0.55,
      sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false
    })
    const particles = new THREE.Points(pgeo, pmat)
    scene.add(particles)

    // === SILVER/WHITE MICRO PARTICLES ===
    const scount = isMobile ? 300 : 900
    const spos = new Float32Array(scount * 3)
    for (let i = 0; i < scount; i++) {
      spos[i * 3] = (Math.random() - 0.5) * 32
      spos[i * 3 + 1] = (Math.random() - 0.5) * 18
      spos[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    const sgeo = new THREE.BufferGeometry()
    sgeo.setAttribute('position', new THREE.BufferAttribute(spos, 3))
    const smat = new THREE.PointsMaterial({
      color: 0xF5F5F5, size: isMobile ? 0.025 : 0.018, transparent: true, opacity: 0.18,
      sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false
    })
    const sparticles = new THREE.Points(sgeo, smat)
    scene.add(sparticles)

    // === WIREFRAME SHAPES ===
    const wireMat = (opacity = 0.08) => new THREE.MeshBasicMaterial({
      color: 0xFF5C00, wireframe: true, transparent: true, opacity
    })

    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, isMobile ? 0 : 1), wireMat(0.08))
    ico.position.set(4.2, 0.4, -1)
    scene.add(ico)

    const oct = new THREE.Mesh(new THREE.OctahedronGeometry(1.1), wireMat(0.07))
    oct.position.set(-5, -0.5, -2)
    scene.add(oct)

    const tor = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.012, 6, isMobile ? 45 : 90),
      new THREE.MeshBasicMaterial({ color: 0xFF5C00, transparent: true, opacity: 0.07 })
    )
    tor.rotation.x = Math.PI / 3
    tor.position.set(1, 0, -3)
    scene.add(tor)

    const tor2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.008, 6, isMobile ? 30 : 60),
      new THREE.MeshBasicMaterial({ color: 0xFF7A2E, transparent: true, opacity: 0.15 })
    )
    tor2.rotation.x = Math.PI / 4
    tor2.rotation.y = Math.PI / 6
    tor2.position.set(-2.5, 1, 0.5)
    scene.add(tor2)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, isMobile ? 16 : 32, isMobile ? 16 : 32),
      new THREE.MeshBasicMaterial({ color: 0xFF5C00, transparent: true, opacity: 0.6 })
    )
    sphere.position.set(3.5, -0.5, 1)
    scene.add(sphere)

    const lineCount = isMobile ? 15 : 40
    const lpos = new Float32Array(lineCount * 6)
    for (let i = 0; i < lineCount; i++) {
      lpos[i * 6] = (Math.random() - 0.5) * 24
      lpos[i * 6 + 1] = (Math.random() - 0.5) * 12
      lpos[i * 6 + 2] = (Math.random() - 0.5) * 8
      lpos[i * 6 + 3] = lpos[i * 6] + (Math.random() - 0.5) * 4
      lpos[i * 6 + 4] = lpos[i * 6 + 1] + (Math.random() - 0.5) * 3
      lpos[i * 6 + 5] = lpos[i * 6 + 2] + (Math.random() - 0.5) * 2
    }
    const lgeo = new THREE.BufferGeometry()
    lgeo.setAttribute('position', new THREE.BufferAttribute(lpos, 3))
    const linesMesh = new THREE.LineSegments(lgeo, new THREE.LineBasicMaterial({
      color: 0xFF5C00, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending
    }))
    scene.add(linesMesh)

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return
      const touch = e.touches[0]
      const rect = container.getBoundingClientRect()
      mouseX = ((touch.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = ((touch.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, false)

    let t = 0
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.004

      targetX += (mouseX - targetX) * (isMobile ? 0.01 : 0.03)
      targetY += (mouseY - targetY) * (isMobile ? 0.01 : 0.03)
      camera.position.x = targetX * 0.6
      camera.position.y = -targetY * 0.3
      camera.lookAt(0, 0, 0)

      particles.rotation.y = t * 0.06
      particles.rotation.x = t * 0.02
      sparticles.rotation.y = -t * 0.04
      ico.rotation.x = t * 0.3; ico.rotation.y = t * 0.2
      oct.rotation.x = t * 0.25; oct.rotation.z = t * 0.15
      tor.rotation.z = t * 0.1
      tor2.rotation.y = t * 0.4; tor2.rotation.x = t * 0.2
      linesMesh.rotation.y = t * 0.03

      const s = 1 + Math.sin(t * 2.5) * 0.15
      sphere.scale.setScalar(s)
      ; (sphere.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(t * 2.5) * 0.25
      pmat.opacity = 0.45 + Math.sin(t * 0.8) * 0.1

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const W2 = container.clientWidth, H2 = container.clientHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = typeWords[wordIndex]
      if (!isDeleting) {
        setTypedWord(currentWord.slice(0, charIndex + 1))
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800)
          return
        }
        setCharIndex(c => c + 1)
      } else {
        setTypedWord(currentWord.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(i => (i + 1) % typeWords.length)
          setCharIndex(0)
          return
        }
        setCharIndex(c => c - 1)
      }
    }, isDeleting ? 55 : 90)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, typeWords])

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#111111] overflow-hidden hero-grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 h-full min-h-screen flex items-center px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col justify-center py-20 sm:py-24 max-w-full sm:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-[rgba(255,92,0,0.35)] bg-[rgba(255,92,0,0.08)] text-[#FF7A2E] text-[10px] tracking-[0.16em] uppercase px-4 py-2 mb-8 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
              India{`'`}s Premium Digital Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="font-display text-[clamp(36px,5vw,72px)] font-extrabold text-[#F5F5F5] leading-[1] tracking-tighter mb-6"
            >
              {t_hero('headline')}
              <span className="text-[#FF5C00] relative block mt-2">
                {typedWord}
                <span className="inline-block w-[2px] h-[0.9em] bg-[#FF5C00] ml-1 align-middle animate-blink" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="font-body text-[13px] sm:text-[15px] text-[rgba(245,245,245,0.6)] max-w-[650px] leading-[1.85] mb-10 font-light"
            >
              {t_hero('subtext')}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="space-y-2 sm:space-y-3 mb-10"
            >
              {[
                'B2B & Multi-Vendor Marketplace Development',
                'Admin Panels, Dashboards & Approval Workflows',
                'Full Stack Web & SaaS Platform Development',
                'AI Tools, Chatbots & Business Automation',
                'Results Delivered in 30 Days — or Free Revision'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3 text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.65)]">
                  <span className="w-4 h-4 border border-[#FF5C00] flex items-center justify-center text-[#FF5C00] text-[8px] flex-shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-wrap"
            >
              <a href="#consultation" className="bg-[#FF5C00] text-[#111] px-6 sm:px-8 py-3 sm:py-3.5 text-[12px] sm:text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,92,0,0.3)] whitespace-nowrap">
                {t_hero('cta1')}
              </a>
              <a href="#work" className="text-[#FF7A2E] text-[12px] sm:text-[13px] tracking-wide font-medium border border-[rgba(255,92,0,0.4)] px-5 sm:px-7 py-3 sm:py-3.5 hover:border-[#FF5C00] hover:bg-[rgba(255,92,0,0.05)] transition-colors whitespace-nowrap">
                {t_hero('cta2')}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-[rgba(255,92,0,0.1)] overflow-x-auto overflow-y-hidden bg-[rgba(17,17,17,0.5)] scrollbar-hide"
      >
        <div className="flex animate-ticker whitespace-nowrap py-3 sm:py-[14px]">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex shrink-0">
              {[
                'Full Stack Web Dev', 'AI Video Production', 'Google & Meta Ads',
                'AI Chatbots', 'Influencer Marketing', 'SEO Optimization', 'Brand Identity',
                'UI/UX Design', 'Workflow Automation',
              ].map((item) => (
                <span key={`${ri}-${item}`} className="flex items-center gap-4 sm:gap-7 px-4 sm:px-7 text-[9px] sm:text-[11px] tracking-[0.16em] uppercase text-[rgba(245,245,245,0.28)]">
                  <span className="text-[#FF5C00] text-xs sm:text-sm">✦</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

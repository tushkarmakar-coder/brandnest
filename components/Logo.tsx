import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ href = '/', size = 'md', className = '' }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32, text: 'text-[18px]' },
    md: { width: 40, height: 40, text: 'text-[24px]' },
    lg: { width: 56, height: 56, text: 'text-[28px]' },
  }

  const { width, height, text } = sizeMap[size]

  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/logo.png" 
        alt="BrandNest - Marketplace Development Agency India" 
        width={width} 
        height={height}
        className="rounded-sm"
        style={{ mixBlendMode: 'screen' }}
        priority
      />
    </div>
  )

  return (
    <Link href={href}>
      {content}
    </Link>
  )
}

/*
TO ADD YOUR LOGO IMAGE:
1. Save your logo as /public/logo.png (or .jpg, .svg)
2. Uncomment the Image section above
3. Comment out the dot + text section
4. Adjust width/height as needed

Logo requirements:
- Square format recommended
- Transparent background (PNG) or white background
- Size: 200x200px minimum for best quality
*/

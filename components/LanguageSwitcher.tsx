'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const isHindi = locale === 'hi';

  const toggle = () => {
    const newLocale = isHindi ? 'en' : 'hi';
    router.push(pathname, { locale: newLocale });
  };

  return (
    <button 
      onClick={toggle} 
      className="transition-all hover:scale-105 active:scale-95"
      style={{
        padding: '6px 14px', 
        borderRadius: '20px', 
        fontSize: '12px',
        fontWeight: 600, 
        border: '1px solid rgba(108,63,245,0.3)',
        background: 'rgba(108,63,245,0.1)', 
        color: '#a78bfa', 
        cursor: 'pointer'
      }}
    >
      {isHindi ? '🇬🇧 EN' : '🇮🇳 HI'}
    </button>
  );
}

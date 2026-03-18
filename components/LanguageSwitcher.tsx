'use client';

import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'tl' : 'en')}
      className="font-bold"
    >
      {language === 'en' ? 'EN' : 'TL'}
    </Button>
  );
};

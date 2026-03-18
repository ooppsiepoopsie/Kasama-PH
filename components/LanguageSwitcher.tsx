'use client';

import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'tl' : 'en')}
      className={cn("font-bold", className)}
    >
      {language === 'en' ? 'EN' : 'TL'}
    </Button>
  );
};

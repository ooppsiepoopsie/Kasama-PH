'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'tl';

export const dictionaries = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',
    'nav.joinWaitlist': 'Join Waitlist',
    // Hero
    'hero.title': 'Kasama: Ang Kaibigan ng Lola at Lolo',
    'hero.subtitle': 'An app that helps Filipino families care for their elderly parents through medicine reminders, emergency alerts, and daily connection.',
    'hero.description': 'Simple lang. Hindi ka nag-iisa, Lo. A comprehensive elderly care app designed for seniors.',
    'hero.cta.waitlist': 'Join Waitlist',
    'hero.cta.features': 'See Features',
    // Problem
    'problem.title': 'Far from home? Kasama namin sila.',
    'problem.subtitle': 'Hindi mo kailangang mag-alala. Kahit malayo ang pamilya, may Kasama sila araw-araw.',
    'problem.panel1': '"Did Mama take her medicine today?"',
    'problem.panel2': '"Oh, time for my vitamins! Salamat, Kasama."',
    'problem.panel3': 'Peace of mind, wherever you are.',
    // Features
    'features.title': 'Mga Tampok na Kasama',
    'features.subtitle': "Everything your parents need to stay safe, healthy, and connected, designed specifically for seniors who aren't tech-savvy.",
    'features.promise.title': 'Promise Protocol',
    'features.promise.desc': 'A medicine reminder for seniors that sounds like a family member talking. Record your own voice to remind them to take their daily meds.',
    'features.sos.title': 'Bantay SOS',
    'features.sos.desc': 'A senior safety alert app feature. Pressing the large SOS button sends an instant alert with GPS location to the family.',
    'features.legacy.title': 'Legacy Vault',
    'features.legacy.desc': 'Seniors can easily record voice memories and stories for future generations, preserving family history.',
    'features.explore': 'Explore all features',
    // Who is this for
    'who.title': 'Kasama is made for families like yours',
    'who.subtitle': 'Whether you live in the next town or across the world, Kasama helps you provide remote care for elderly parents.',
    'who.1.title': 'OFWs caring from afar',
    'who.1.desc': 'Stay connected and ensure your parents are safe, no matter the time zone.',
    'who.2.title': "Adult children managing parents' health",
    'who.2.desc': 'Easily coordinate medicine reminders and doctor appointments.',
    'who.3.title': 'Seniors who want to stay independent',
    'who.3.desc': 'A simple, respectful interface that empowers seniors without overwhelming them.',
    'who.4.title': 'Families who want to preserve memories',
    'who.4.desc': 'Capture and save precious stories and voice notes for future generations.',
    // Meet the family
    'family.title': 'Meet the Kasama Family',
    'family.subtitle': 'Our characters represent the beautiful diversity of the Filipino family.',
    'family.zeny.title': 'Lola Zeny',
    'family.zeny.role': 'The Heart',
    'family.zeny.desc': 'Represents the loving Filipino grandmother who wants to stay healthy and connected with family.',
    'family.leo.title': 'Leo',
    'family.leo.role': 'The Protector',
    'family.leo.desc': 'The son who watches over his mother even when he is far away.',
    'family.boy.title': 'Lolo Boy',
    'family.boy.role': 'The Energizer',
    'family.boy.desc': 'Full of life, stories, and movement.',
    'family.annie.title': 'Annie',
    'family.annie.role': 'The Guide',
    'family.annie.desc': 'Helps families set up and manage the Kasama experience.',
    // Trust
    'trust.title': 'Safe, Private, and Family-First',
    'trust.1': "Your family's data stays private",
    'trust.2': 'Designed with senior accessibility in mind',
    'trust.3': 'Built for Filipino families',
    'trust.4': 'No ads or spam',
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.1.q': 'What is Kasama PH?',
    'faq.1.a': 'Kasama PH is an elderly care app designed specifically for Filipino families. It provides medicine reminders, emergency alerts (Bantay SOS), and a way to stay connected daily.',
    'faq.2.q': 'Who is Kasama for?',
    'faq.2.a': 'It is for seniors who want to stay independent, and for their family members (like OFWs or busy adult children) who want to provide remote care and ensure their parents are safe.',
    'faq.3.q': 'Does Lola or Lolo need a smartphone?',
    'faq.3.a': "Yes, they will need a basic smartphone or tablet. However, the Kasama app is designed to be extremely simple, with large buttons and voice-guided interfaces so even those who aren't tech-savvy can use it easily.",
    'faq.4.q': 'Can families monitor from abroad?',
    'faq.4.a': 'Absolutely. Kasama is perfect for OFWs. As long as both devices have an internet connection, you can manage medicine schedules and receive alerts from anywhere in the world.',
    'faq.5.q': 'Is Kasama a medical device?',
    'faq.5.a': 'No, Kasama is a family connection and reminder tool. It is not intended to diagnose, treat, or replace professional medical advice or emergency services.',
    // Close
    'close.title': 'Hindi nag-iisa si Lola at Lolo.',
    'close.subtitle': 'May Kasama sila araw-araw. Join the waitlist today and be the first to bring Kasama PH to your family.',
    'close.cta': 'Maging Unang Kasama →',
    // Waitlist Page
    'waitlist.title': 'Maging bahagi ng aming pamilya.',
    'waitlist.subtitle': 'Sign up to get early access and updates. We are building Kasama PH to bring Filipino families closer together, no matter the distance.',
    'waitlist.form.title': 'Join the Waitlist',
    'waitlist.form.subtitle': 'Enter your details below to secure your spot.',
    'waitlist.trust.1': 'Early access to Kasama',
    'waitlist.trust.2': 'First to try new features',
    'waitlist.trust.3': 'Help shape the app',
    'waitlist.privacy': 'By joining, you agree to our Privacy Policy.',
    // Form
    'form.success.title': 'Salamat!',
    'form.success.desc': 'You are officially on the waitlist. We will notify you as soon as Kasama PH is ready for your family.',
    'form.name.label': 'Full Name',
    'form.name.placeholder': 'Juan Dela Cruz',
    'form.name.error': 'Please enter your name.',
    'form.email.label': 'Email Address',
    'form.email.placeholder': 'juan@example.com',
    'form.email.error.empty': 'Please enter your email.',
    'form.email.error.invalid': 'Please enter a valid email address.',
    'form.role.label': 'I am a:',
    'form.role.error': 'Please select how you will use Kasama.',
    'form.role.senior': 'Senior (Lolo/Lola)',
    'form.role.family': 'Family Member',
    'form.role.caregiver': 'Caregiver',
    'form.location.label': 'Location',
    'form.location.optional': '(Optional)',
    'form.location.placeholder': 'e.g., Manila, Philippines',
    'form.submit': 'Sumali sa Waitlist',
    'form.submitting': 'Submitting...',
    // About Page
    'about.hero.title': 'Built for the Filipino Family.',
    'about.hero.desc': 'Kasama PH was created to solve a deeply personal problem: caring for our aging parents in the Philippines while living miles away. Our mission is to use technology to bridge the distance, preserving the warmth, respect, and deep connection of the Filipino family.',
    'about.pillars.title': 'Our Cultural Pillars',
    'about.pillars.desc': "We didn't just translate an app into Tagalog. We built Kasama PH from the ground up based on core Filipino values.",
    'about.pillars.1.title': 'Pagmamahal',
    'about.pillars.1.desc': 'Love and care. Technology should never feel cold. Every reminder and alert is designed to feel like a warm embrace from a family member.',
    'about.pillars.2.title': 'Bayanihan',
    'about.pillars.2.desc': 'Community spirit. Caregiving is a shared responsibility. We make it easy for siblings and relatives to coordinate care together.',
    'about.pillars.3.title': 'Paggalang',
    'about.pillars.3.desc': 'Deep respect for our elders. We prioritize their dignity and independence, giving them tools they can use confidently without feeling helpless.',
    'about.family.title': 'Meet the Kasama Family',
    'about.family.desc': 'We designed Kasama PH with real people in mind. These characters represent the families we serve every day.',
    'about.family.zeny.role': 'Senior User',
    'about.family.zeny.desc': 'Loves gardening and cooking. Needs a little help remembering her daily maintenance medicines.',
    'about.family.leo.role': 'Family Partner',
    'about.family.leo.desc': "Lola Zeny's son. Works in the city and worries about his mom living alone in the province.",
    'about.family.boy.role': 'Senior User',
    'about.family.boy.desc': 'A retired teacher with a lot of stories to tell. Wants to stay active and connected with his grandchildren.',
    'about.family.annie.role': 'Family Partner',
    'about.family.annie.desc': "Lolo Boy's daughter. An OFW who wants to make sure her father is safe and happy while she is away.",
    'about.story.title': 'Our Story',
    'about.story.p1': 'Kasama PH started with a simple question: "Did Mama take her medicine today?"',
    'about.story.p2': 'As Filipinos, taking care of our parents is not an obligation; it is a privilege. But modern life often takes us far from home—to different cities, or even different countries. Existing health apps were too complicated, too clinical, and built for Western audiences.',
    'about.story.p3': 'We realized we needed something different. Something that spoke our language, understood our culture, and was so simple that even a grandparent who has never used a smartphone could understand it.',
    'about.story.p4': 'That is why we built Kasama PH. Para sa pamilyang Pilipino.',
    'about.cta.title': 'Be part of our journey.',
    'about.cta.desc': 'We are launching soon. Join the waitlist to get early access and help us shape the future of elderly care in the Philippines.',
    'about.cta.button': 'Join Waitlist',
    // Features Page
    'features.hero.title': 'Lahat ng Kailangan ni Lola at Lolo, Nasa Isang App.',
    'features.hero.desc': 'Kasama PH is an app that helps Filipino families remotely care for their elderly parents through medicine reminders, emergency alerts, voice memory recording, and daily conversation prompts.',
    'features.health.title': 'Health & Safety First',
    'features.health.desc': 'Peace of mind for you, independence for them. We designed our safety features to be foolproof and friendly.',
    'features.health.1.title': 'Promise Protocol',
    'features.health.1.desc': 'Medicine reminders that sound like a warm family conversation. Lola Zeny receives a gentle nudge, and Leo gets notified when she takes her meds.',
    'features.health.2.title': 'Bantay SOS',
    'features.health.2.desc': 'One massive, easy-to-press emergency button. If Lola Zeny needs help, Leo receives an instant alert with her exact GPS location.',
    'features.connection.title': 'Connection & Memories',
    'features.connection.desc': 'Bridge the distance with tools that capture their stories and keep the daily conversation flowing.',
    'features.connection.1.title': 'Legacy Vault',
    'features.connection.1.desc': 'A secure place for Lolo Boy to record voice memories, family recipes, and stories for Annie and the next generation to cherish forever.',
    'features.connection.2.title': 'Kwentuhan Time',
    'features.connection.2.desc': 'Daily conversation prompts that spark joy. Answer simple questions together, even when you are miles apart.',
    'features.activity.title': 'Activity & Joy',
    'features.activity.desc': 'Keeping the mind and body active is crucial. Kasama PH includes fun, safe activities designed specifically for seniors.',
    'features.activity.1.title': 'Galaw-Galaw Gym',
    'features.activity.1.desc': 'Safe, guided chair exercises for seniors to maintain mobility without strain.',
    'features.activity.2.title': 'Kanta Mode',
    'features.activity.2.desc': 'Acapella song recording for memory preservation and pure enjoyment.',
    'features.activity.3.title': 'Kulay Kasama',
    'features.activity.3.desc': 'Collaborative digital coloring activities to share with grandchildren.',
    'features.cta.title': 'Ready to give them a Kasama?',
    'features.cta.desc': 'Join the waitlist today and be the first to experience a new way of caring for your parents.',
    'features.cta.button': 'Join Waitlist',
    // How It Works Page
    'how.hero.title': 'Simple Setup. Zero Frustration.',
    'how.hero.desc': 'Setting up Kasama PH is designed to be handled entirely by the family member remotely. You configure the health data and preferences on your phone, and generate a simple QR code. Your parent just scans it to instantly log in and configure their device.',
    'how.timeline.title': 'The Onboarding Journey',
    'how.timeline.desc': 'We removed passwords and complicated menus for our seniors. Here is how the family sets it up in four easy steps.',
    'how.step1.label': 'Step 1',
    'how.step1.title': 'Create Family Account',
    'how.step1.desc': 'The primary caregiver (like Leo or Annie) downloads the app and creates the main family account. This acts as the central hub for all alerts and settings.',
    'how.step2.label': 'Step 2',
    'how.step2.title': 'Setup Senior Profile & Health',
    'how.step2.desc': "Add Lola or Lolo's details. Input their daily medicine schedule, doctor's contact information, and emergency hotlines. All of this is done remotely by the family member.",
    'how.step3.label': 'Step 3',
    'how.step3.title': 'Preferences & Consent',
    'how.step3.desc': "Adjust the app's text size, volume, and language preferences (e.g., Tagalog or English). Review and agree to the privacy and location tracking consents required for Bantay SOS.",
    'how.step4.label': 'Step 4',
    'how.step4.title': 'QR Code Generation',
    'how.step4.desc': 'The app generates a unique, secure QR code. Print it out or show it on your screen. Lola or Lolo simply opens their camera, scans the code, and their device is instantly configured and logged in. No typing required.',
    'how.pwa.title': 'No App Store Needed',
    'how.pwa.desc': "Kasama PH is built as a Progressive Web App (PWA). This means it doesn't take up heavy storage space and never requires manual updates from the App Store or Google Play.",
    'how.pwa.1.title': 'Add to Home Screen',
    'how.pwa.1.desc': 'Just tap "Add to Home Screen" from your browser. It installs instantly and looks exactly like a native app.',
    'how.cta.title': 'Ready to simplify their daily routine?',
    'how.cta.desc': 'Join the waitlist today and get early access to the easiest caregiving app for Filipino families.',
    'how.cta.button': 'Join Waitlist',
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.designed': 'Designed with',
  },
  tl: {
    // Navbar
    'nav.features': 'Mga Tampok',
    'nav.howItWorks': 'Paano Gumagana',
    'nav.about': 'Tungkol Sa Amin',
    'nav.joinWaitlist': 'Sumali sa Waitlist',
    // Hero
    'hero.title': 'Kasama: Ang Kaibigan ng Lola at Lolo',
    'hero.subtitle': 'Isang app na tumutulong sa mga pamilyang Pilipino na alagaan ang kanilang mga magulang sa pamamagitan ng medicine reminders, emergency alerts, at araw-araw na koneksyon.',
    'hero.description': 'Simple lang. Hindi ka nag-iisa, Lo. Isang kumpletong elderly care app na idinisenyo para sa mga senior.',
    'hero.cta.waitlist': 'Sumali sa Waitlist',
    'hero.cta.features': 'Tingnan ang mga Tampok',
    // Problem
    'problem.title': 'Malayo sa bahay? Kasama namin sila.',
    'problem.subtitle': 'Hindi mo kailangang mag-alala. Kahit malayo ang pamilya, may Kasama sila araw-araw.',
    'problem.panel1': '"Nainom na kaya ni Mama ang gamot niya ngayon?"',
    'problem.panel2': '"Ay, oras na para sa vitamins ko! Salamat, Kasama."',
    'problem.panel3': 'Peace of mind, nasaan ka man.',
    // Features
    'features.title': 'Mga Tampok na Kasama',
    'features.subtitle': 'Lahat ng kailangan ng iyong mga magulang para manatiling ligtas, malusog, at konektado, idinisenyo lalo na para sa mga senior na hindi sanay sa teknolohiya.',
    'features.promise.title': 'Promise Protocol',
    'features.promise.desc': 'Isang medicine reminder para sa mga senior na parang boses ng kapamilya. I-record ang sarili mong boses para paalalahanan silang inumin ang kanilang gamot araw-araw.',
    'features.sos.title': 'Bantay SOS',
    'features.sos.desc': 'Isang senior safety alert app feature. Ang pagpindot sa malaking SOS button ay nagpapadala ng agarang alerto kasama ang GPS location sa pamilya.',
    'features.legacy.title': 'Legacy Vault',
    'features.legacy.desc': 'Madaling mai-record ng mga senior ang kanilang mga alaala at kwento para sa mga susunod na henerasyon, pinapanatili ang kasaysayan ng pamilya.',
    'features.explore': 'Tuklasin ang lahat ng tampok',
    // Who is this for
    'who.title': 'Ang Kasama ay ginawa para sa mga pamilyang tulad niyo',
    'who.subtitle': 'Kahit nasa kabilang bayan ka o sa kabilang panig ng mundo, tinutulungan ka ng Kasama na magbigay ng remote care para sa iyong mga magulang.',
    'who.1.title': 'Mga OFW na nag-aalaga mula sa malayo',
    'who.1.desc': 'Manatiling konektado at siguraduhing ligtas ang iyong mga magulang, anuman ang time zone.',
    'who.2.title': 'Mga anak na nag-aasikaso sa kalusugan ng magulang',
    'who.2.desc': 'Madaling i-coordinate ang mga medicine reminder at appointment sa doktor.',
    'who.3.title': 'Mga senior na gustong manatiling independent',
    'who.3.desc': 'Isang simple at magalang na interface na nagbibigay-kakayahan sa mga senior nang hindi sila nalilito.',
    'who.4.title': 'Mga pamilyang gustong mag-ipon ng alaala',
    'who.4.desc': 'Kumuha at i-save ang mga mahahalagang kwento at voice notes para sa mga susunod na henerasyon.',
    // Meet the family
    'family.title': 'Kilalanin ang Pamilyang Kasama',
    'family.subtitle': 'Ang aming mga karakter ay kumakatawan sa magandang pagkakaiba-iba ng pamilyang Pilipino.',
    'family.zeny.title': 'Lola Zeny',
    'family.zeny.role': 'Ang Puso',
    'family.zeny.desc': 'Kumakatawan sa mapagmahal na lola na gustong manatiling malusog at konektado sa pamilya.',
    'family.leo.title': 'Leo',
    'family.leo.role': 'Ang Tagapagtanggol',
    'family.leo.desc': 'Ang anak na nagbabantay sa kanyang ina kahit siya ay nasa malayo.',
    'family.boy.title': 'Lolo Boy',
    'family.boy.role': 'Ang Nagbibigay-sigla',
    'family.boy.desc': 'Puno ng buhay, kwento, at galaw.',
    'family.annie.title': 'Annie',
    'family.annie.role': 'Ang Gabay',
    'family.annie.desc': 'Tumutulong sa mga pamilya na i-set up at pamahalaan ang Kasama experience.',
    // Trust
    'trust.title': 'Ligtas, Pribado, at Pamilya ang Una',
    'trust.1': 'Pribado ang data ng iyong pamilya',
    'trust.2': 'Idinisenyo na nasa isip ang accessibility ng mga senior',
    'trust.3': 'Ginawa para sa mga pamilyang Pilipino',
    'trust.4': 'Walang ads o spam',
    // FAQ
    'faq.title': 'Mga Madalas Itanong',
    'faq.1.q': 'Ano ang Kasama PH?',
    'faq.1.a': 'Ang Kasama PH ay isang elderly care app na partikular na idinisenyo para sa mga pamilyang Pilipino. Nagbibigay ito ng medicine reminders, emergency alerts (Bantay SOS), at paraan para manatiling konektado araw-araw.',
    'faq.2.q': 'Para kanino ang Kasama?',
    'faq.2.a': 'Ito ay para sa mga senior na gustong manatiling independent, at para sa kanilang mga kapamilya (tulad ng mga OFW o abalang anak) na gustong magbigay ng remote care at siguraduhing ligtas ang kanilang mga magulang.',
    'faq.3.q': 'Kailangan ba ni Lola o Lolo ng smartphone?',
    'faq.3.a': 'Oo, mangangailangan sila ng basic smartphone o tablet. Gayunpaman, ang Kasama app ay idinisenyo upang maging napakasimple, na may malalaking button at voice-guided interface kaya kahit ang mga hindi sanay sa teknolohiya ay madaling magamit ito.',
    'faq.4.q': 'Maaari bang mag-monitor ang mga pamilya mula sa ibang bansa?',
    'faq.4.a': 'Oo naman. Ang Kasama ay perpekto para sa mga OFW. Hangga\'t parehong may internet connection ang mga device, maaari mong pamahalaan ang mga iskedyul ng gamot at makatanggap ng mga alerto mula saanman sa mundo.',
    'faq.5.q': 'Ang Kasama ba ay isang medical device?',
    'faq.5.a': 'Hindi, ang Kasama ay isang tool para sa koneksyon ng pamilya at mga paalala. Hindi ito inilaan upang mag-diagnose, gumamot, o palitan ang propesyonal na medikal na payo o emergency services.',
    // Close
    'close.title': 'Hindi nag-iisa si Lola at Lolo.',
    'close.subtitle': 'May Kasama sila araw-araw. Sumali sa waitlist ngayon at maging una na magdala ng Kasama PH sa iyong pamilya.',
    'close.cta': 'Maging Unang Kasama →',
    // Waitlist Page
    'waitlist.title': 'Maging bahagi ng aming pamilya.',
    'waitlist.subtitle': 'Mag-sign up para makakuha ng early access at updates. Binubuo namin ang Kasama PH para mas mapalapit ang mga pamilyang Pilipino, gaano man kalayo.',
    'waitlist.form.title': 'Sumali sa Waitlist',
    'waitlist.form.subtitle': 'Ilagay ang iyong mga detalye sa ibaba para makasiguro ng pwesto.',
    'waitlist.trust.1': 'Early access sa Kasama',
    'waitlist.trust.2': 'Unang makakasubok ng mga bagong tampok',
    'waitlist.trust.3': 'Tumulong sa pagbuo ng app',
    'waitlist.privacy': 'Sa pagsali, sumasang-ayon ka sa aming Privacy Policy.',
    // Form
    'form.success.title': 'Salamat!',
    'form.success.desc': 'Opisyal ka nang nasa waitlist. Ipapaalam namin sa iyo sa lalong madaling panahon kapag handa na ang Kasama PH para sa iyong pamilya.',
    'form.name.label': 'Buong Pangalan',
    'form.name.placeholder': 'Juan Dela Cruz',
    'form.name.error': 'Pakilagay ang iyong pangalan.',
    'form.email.label': 'Email Address',
    'form.email.placeholder': 'juan@example.com',
    'form.email.error.empty': 'Pakilagay ang iyong email.',
    'form.email.error.invalid': 'Pakilagay ang tamang email address.',
    'form.role.label': 'Ako ay isang:',
    'form.role.error': 'Pumili kung paano mo gagamitin ang Kasama.',
    'form.role.senior': 'Senior (Lolo/Lola)',
    'form.role.family': 'Miyembro ng Pamilya',
    'form.role.caregiver': 'Tagapag-alaga',
    'form.location.label': 'Lokasyon',
    'form.location.optional': '(Opsyonal)',
    'form.location.placeholder': 'hal., Manila, Philippines',
    'form.submit': 'Sumali sa Waitlist',
    'form.submitting': 'Ipinapasa...',
    // About Page
    'about.hero.title': 'Binuo para sa Pamilyang Pilipino.',
    'about.hero.desc': 'Nilikha ang Kasama PH para lutasin ang isang napakapersonal na problema: ang pag-aalaga sa ating mga tumatandang magulang sa Pilipinas habang tayo ay nakatira sa malayo. Ang aming misyon ay gamitin ang teknolohiya upang tulay ang distansya, pinapanatili ang init, paggalang, at malalim na koneksyon ng pamilyang Pilipino.',
    'about.pillars.title': 'Ang Ating Mga Haligi ng Kultura',
    'about.pillars.desc': 'Hindi lang namin isinalin ang isang app sa Tagalog. Binuo namin ang Kasama PH mula sa simula batay sa mga pangunahing pagpapahalagang Pilipino.',
    'about.pillars.1.title': 'Pagmamahal',
    'about.pillars.1.desc': 'Pag-ibig at pag-aalaga. Ang teknolohiya ay hindi dapat maging malamig. Bawat paalala at alerto ay idinisenyo upang maging parang mainit na yakap mula sa isang kapamilya.',
    'about.pillars.2.title': 'Bayanihan',
    'about.pillars.2.desc': 'Diwa ng komunidad. Ang pag-aalaga ay isang pinagsasaluhang responsibilidad. Ginagawa naming madali para sa mga magkakapatid at kamag-anak na magtulungan sa pag-aalaga.',
    'about.pillars.3.title': 'Paggalang',
    'about.pillars.3.desc': 'Malalim na paggalang sa ating mga nakatatanda. Binibigyang-priyoridad namin ang kanilang dignidad at kalayaan, binibigyan sila ng mga tool na magagamit nila nang may kumpiyansa nang hindi nakakaramdam ng kawalan ng kakayahan.',
    'about.family.title': 'Kilalanin ang Pamilyang Kasama',
    'about.family.desc': 'Idinisenyo namin ang Kasama PH na may totoong tao sa isip. Ang mga karakter na ito ay kumakatawan sa mga pamilyang pinaglilingkuran namin araw-araw.',
    'about.family.zeny.role': 'Senior User',
    'about.family.zeny.desc': 'Mahilig maghalaman at magluto. Kailangan ng kaunting tulong sa pag-alala sa kanyang mga pang-araw-araw na maintenance medicine.',
    'about.family.leo.role': 'Family Partner',
    'about.family.leo.desc': 'Anak ni Lola Zeny. Nagtatrabaho sa siyudad at nag-aalala sa kanyang ina na namumuhay mag-isa sa probinsya.',
    'about.family.boy.role': 'Senior User',
    'about.family.boy.desc': 'Isang retiradong guro na maraming kwentong ibabahagi. Gustong manatiling aktibo at konektado sa kanyang mga apo.',
    'about.family.annie.role': 'Family Partner',
    'about.family.annie.desc': 'Anak ni Lolo Boy. Isang OFW na gustong siguraduhing ligtas at masaya ang kanyang ama habang siya ay nasa malayo.',
    'about.story.title': 'Ang Aming Kwento',
    'about.story.p1': 'Nagsimula ang Kasama PH sa isang simpleng tanong: "Nainom na kaya ni Mama ang gamot niya ngayon?"',
    'about.story.p2': 'Bilang mga Pilipino, ang pag-aalaga sa ating mga magulang ay hindi isang obligasyon; ito ay isang pribilehiyo. Ngunit ang modernong buhay ay madalas na naglalayo sa atin sa tahanan—sa ibang mga lungsod, o kahit sa ibang mga bansa. Ang mga umiiral na health app ay masyadong kumplikado, masyadong klinikal, at binuo para sa mga Kanluraning audience.',
    'about.story.p3': 'Napagtanto namin na kailangan namin ng kakaiba. Isang bagay na nagsasalita ng aming wika, nakakaintindi sa aming kultura, at napakasimple na kahit ang isang lolo o lola na hindi pa nakakagamit ng smartphone ay maiintindihan ito.',
    'about.story.p4': 'Iyon ang dahilan kung bakit namin binuo ang Kasama PH. Para sa pamilyang Pilipino.',
    'about.cta.title': 'Maging bahagi ng aming paglalakbay.',
    'about.cta.desc': 'Malapit na kaming maglunsad. Sumali sa waitlist para makakuha ng early access at tulungan kaming hubugin ang kinabukasan ng elderly care sa Pilipinas.',
    'about.cta.button': 'Sumali sa Waitlist',
    // Features Page
    'features.hero.title': 'Lahat ng Kailangan ni Lola at Lolo, Nasa Isang App.',
    'features.hero.desc': 'Ang Kasama PH ay isang app na tumutulong sa mga pamilyang Pilipino na alagaan ang kanilang mga tumatandang magulang mula sa malayo sa pamamagitan ng mga paalala sa gamot, emergency alert, voice memory recording, at pang-araw-araw na kwentuhan.',
    'features.health.title': 'Kalusugan at Kaligtasan Muna',
    'features.health.desc': 'Peace of mind para sa iyo, kalayaan para sa kanila. Idinisenyo namin ang aming mga safety feature para maging madaling gamitin at palakaibigan.',
    'features.health.1.title': 'Promise Protocol',
    'features.health.1.desc': 'Mga paalala sa gamot na parang mainit na kwentuhan ng pamilya. Nakakatanggap si Lola Zeny ng banayad na paalala, at naaabisuhan si Leo kapag nainom na niya ang kanyang mga gamot.',
    'features.health.2.title': 'Bantay SOS',
    'features.health.2.desc': 'Isang malaki at madaling pinduting emergency button. Kung kailangan ni Lola Zeny ng tulong, makakatanggap si Leo ng agarang alerto kasama ang kanyang eksaktong lokasyon sa GPS.',
    'features.connection.title': 'Koneksyon at Mga Alaala',
    'features.connection.desc': 'Tulay ang distansya gamit ang mga tool na kumukuha ng kanilang mga kwento at nagpapanatili sa pang-araw-araw na kwentuhan.',
    'features.connection.1.title': 'Legacy Vault',
    'features.connection.1.desc': 'Isang ligtas na lugar para kay Lolo Boy upang i-record ang mga voice memory, recipe ng pamilya, at mga kwento para pahalagahan ni Annie at ng susunod na henerasyon magpakailanman.',
    'features.connection.2.title': 'Kwentuhan Time',
    'features.connection.2.desc': 'Pang-araw-araw na mga tanong sa kwentuhan na nagdudulot ng saya. Sagutin ang mga simpleng tanong nang magkasama, kahit milya-milya ang layo ninyo sa isa\'t isa.',
    'features.activity.title': 'Aktibidad at Saya',
    'features.activity.desc': 'Ang pagpapanatiling aktibo ng isip at katawan ay mahalaga. Kasama sa Kasama PH ang mga masaya at ligtas na aktibidad na sadyang idinisenyo para sa mga nakatatanda.',
    'features.activity.1.title': 'Galaw-Galaw Gym',
    'features.activity.1.desc': 'Ligtas at ginagabayang mga ehersisyo sa upuan para sa mga nakatatanda upang mapanatili ang paggalaw nang walang labis na pagkapagod.',
    'features.activity.2.title': 'Kanta Mode',
    'features.activity.2.desc': 'Acapella song recording para sa pagpapanatili ng memorya at purong kasiyahan.',
    'features.activity.3.title': 'Kulay Kasama',
    'features.activity.3.desc': 'Collaborative digital coloring activities na ibabahagi sa mga apo.',
    'features.cta.title': 'Handa na bang bigyan sila ng Kasama?',
    'features.cta.desc': 'Sumali sa waitlist ngayon at maging unang makaranas ng bagong paraan ng pag-aalaga sa iyong mga magulang.',
    'features.cta.button': 'Sumali sa Waitlist',
    // How It Works Page
    'how.hero.title': 'Simpleng Setup. Walang Hirap.',
    'how.hero.desc': 'Ang pag-setup ng Kasama PH ay idinisenyo upang pangasiwaan nang buo ng kapamilya mula sa malayo. Iko-configure mo ang data ng kalusugan at mga kagustuhan sa iyong telepono, at bubuo ng simpleng QR code. I-scan lang ito ng iyong magulang upang agad na mag-log in at i-configure ang kanilang device.',
    'how.timeline.title': 'Ang Proseso ng Onboarding',
    'how.timeline.desc': 'Inalis namin ang mga password at kumplikadong menu para sa aming mga nakatatanda. Narito kung paano ito ise-setup ng pamilya sa apat na madaling hakbang.',
    'how.step1.label': 'Hakbang 1',
    'how.step1.title': 'Gumawa ng Family Account',
    'how.step1.desc': 'Ang pangunahing tagapag-alaga (tulad ni Leo o Annie) ay magda-download ng app at gagawa ng pangunahing family account. Ito ang magsisilbing sentro para sa lahat ng alerto at setting.',
    'how.step2.label': 'Hakbang 2',
    'how.step2.title': 'I-setup ang Senior Profile at Kalusugan',
    'how.step2.desc': 'Idagdag ang mga detalye ni Lola o Lolo. Ilagay ang kanilang pang-araw-araw na iskedyul ng gamot, impormasyon sa pakikipag-ugnayan ng doktor, at mga emergency hotline. Ang lahat ng ito ay ginagawa mula sa malayo ng kapamilya.',
    'how.step3.label': 'Hakbang 3',
    'how.step3.title': 'Mga Kagustuhan at Pahintulot',
    'how.step3.desc': 'Ayusin ang laki ng text, volume, at mga kagustuhan sa wika ng app (hal., Tagalog o English). Suriin at sumang-ayon sa mga pahintulot sa privacy at pagsubaybay sa lokasyon na kinakailangan para sa Bantay SOS.',
    'how.step4.label': 'Hakbang 4',
    'how.step4.title': 'Pagbuo ng QR Code',
    'how.step4.desc': 'Ang app ay bubuo ng natatangi at secure na QR code. I-print ito o ipakita sa iyong screen. Bubuksan lang ni Lola o Lolo ang kanilang camera, i-scan ang code, at ang kanilang device ay agad na mako-configure at maka-log in. Walang kinakailangang pag-type.',
    'how.pwa.title': 'Hindi Kailangan ng App Store',
    'how.pwa.desc': 'Ang Kasama PH ay binuo bilang isang Progressive Web App (PWA). Nangangahulugan ito na hindi ito kumukuha ng malaking espasyo sa storage at hindi kailanman nangangailangan ng mga manu-manong update mula sa App Store o Google Play.',
    'how.pwa.1.title': 'Idagdag sa Home Screen',
    'how.pwa.1.desc': 'I-tap lang ang "Add to Home Screen" mula sa iyong browser. Mag-i-install ito kaagad at magmumukhang eksakto tulad ng isang native app.',
    'how.cta.title': 'Handa na bang pasimplehin ang kanilang pang-araw-araw na gawain?',
    'how.cta.desc': 'Sumali sa waitlist ngayon at makakuha ng early access sa pinakamadaling caregiving app para sa mga pamilyang Pilipino.',
    'how.cta.button': 'Sumali sa Waitlist',
    // Footer
    'footer.rights': 'Lahat ng karapatan ay nakalaan.',
    'footer.designed': 'Idinisenyo nang may',
  }
};

type DictionaryKey = keyof typeof dictionaries.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: DictionaryKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem('kasama-lang') as Language;
    if (saved && (saved === 'en' || saved === 'tl')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('kasama-lang', lang);
  };

  const t = (key: DictionaryKey): string => {
    // If not mounted yet, default to English to match server render and avoid hydration mismatch
    const currentLang = mounted ? language : 'en';
    return dictionaries[currentLang][key] || dictionaries.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

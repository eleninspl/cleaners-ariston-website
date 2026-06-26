export type Lang = 'el' | 'en';

export const ui = {
  el: {
    // Nav
    'nav.home':    'Αρχική',
    'nav.services':'Υπηρεσίες',
    'nav.about':   'Σχετικά',
    'nav.contact': 'Επικοινωνία',
    'nav.call':    'Τηλεφωνήστε',
    'nav.lang':    'EN',

    // Hero
    'hero.label':       'Μύκονος, Ελλάδα · Από το 1968',
    'hero.title':       'Το Καλύτερο',
    'hero.title.em':    'Στεγνοκαθαριστήριο',
    'hero.title.end':   'της Μυκόνου',
    'hero.body':        'Φροντίδα ρούχων υψηλής ποιότητας — εμπιστευμένη από ξενοδοχεία, βίλες και κατοίκους της Μυκόνου για πάνω από πέντε δεκαετίες.',
    'hero.cta.primary': 'Κλείστε Ραντεβού',
    'hero.cta.secondary':'Οι Υπηρεσίες μας',

    // Trust bar
    'trust.years.num':   '55+',
    'trust.years.label': 'Χρόνια Εμπειρίας',
    'trust.locations.num':'Αθήνα & Μύκονος',
    'trust.locations.label':'Δύο Καταστήματα',
    'trust.who.num':     'Ξενοδοχεία · Βίλες · Κάτοικοι',
    'trust.who.label':   'Εξυπηρετούμε',
    'trust.quality.num': '4,9 ★',
    'trust.quality.label':'61 Αξιολογήσεις Google',

    // About (home)
    'about.label':  'Η Ιστορία μας',
    'about.title':  'Μια Κληρονομιά\nΑριστείας',
    'about.body1':  'Από το 1968, το Center Cleaners Ariston είναι η πρώτη επιλογή για φροντίδα ρούχων υψηλής ποιότητας στην Ελλάδα. Από την Αθήνα μέχρι τους ηλιόλουστους δρόμους της Μυκόνου, χτίσαμε τη φήμη μας στην ακρίβεια, τη διακριτικότητα και τον απόλυτο σεβασμό σε κάθε ύφασμα.',
    'about.body2':  'Είτε πρόκειται για ένα σύνθετο κοστούμι, ένα βραδινό φόρεμα σχεδιαστή, ή τα λευκά ενός ξενοδοχείου — το αντιμετωπίζουμε σαν να ήταν αναντικατάστατο. Γιατί συχνά είναι.',
    'about.cta':    'Η Ιστορία μας',

    // Services (home)
    'services.label':  'Τι Κάνουμε',
    'services.title':  'Υπηρεσίες για\nΚάθε Ύφασμα',
    'services.cta':    'Όλες οι Υπηρεσίες',

    'service.1.title': 'Στεγνοκαθάρισμα',
    'service.1.body':  'Dry Cleaning & Wet Cleaning για δερμάτινα, φορέματα, νυφικά, μεταξωτά και όλα τα ευαίσθητα ρούχα.',
    'service.2.title': 'Πλυντήριο & Σιδέρωμα',
    'service.2.body':  'Πλήρης υπηρεσία πλύσης και σιδερώματος για καθημερινά και επίσημα ρούχα.',
    'service.3.title': 'Οικιακά Υφάσματα',
    'service.3.body':  'Παπλώματα, κουβέρτες, κουρτίνες, χαλιά και τραπεζομάντιλα — φροντίδα για κάθε υφαντό του σπιτιού σας.',
    'service.4.title': 'Ξενοδοχεία & Βίλες',
    'service.4.body':  'Ειδικά προγράμματα πλυντηρίου για ξενοδοχεία, βίλες και καταλύματα της Μυκόνου.',

    // Reviews
    'reviews.label':  'Κριτικές Google',
    'reviews.title':  'Τι Λένε οι Πελάτες μας',
    'reviews.rating': '4,9',
    'reviews.count':  '61 αξιολογήσεις',

    'review.1.text':   '«Άψογοι επαγγελματίες! Παρέλαβα πεντακάθαρα ρούχα και στολές μαγειρικής στην ώρα τους εν μέσω σεζόν. Δεν έχετε μυρίσει πιο μυρωδάτα ρούχα — περάστε έξω από το καθαριστήριο στον Όρνο και θα καταλάβετε τι λέω. 10/10!»',
    'review.1.author': 'Κωνσταντίνα Αποστολίδου',
    'review.2.text':   '«Από τα μαγαζιά που σε εκπλήσσουν ευχάριστα. Τους εμπιστεύτηκα δύο πολύ δύσκολα κομμάτια με ιδιαίτερες υφές και το αποτέλεσμα ήταν άψογο. Ο Θάνος είναι εξαιρετικός επαγγελματίας. Spotless αποτέλεσμα και premium αίσθηση που σπάνια βρίσκεις. Highly recommended!»',
    'review.2.author': 'Dina Spyridopoulou',
    'review.3.text':   '«Υπέροχος συνδυασμός ανθρωπιάς και επαγγελματισμού, πάντα αγγίζει την τελειότητα. Μοναδική μυρωδιά φρεσκάδας σε κάθε ρούχο. Μια δοκιμή ήταν αρκετή για να με πείσει — το ίδιο εύχομαι και για εσάς!»',
    'review.3.author': 'Πάνος Χαραλαμπόπουλος',

    // CTA
    'cta.title':       'Έτοιμοι για Άψογα Ρούχα;',
    'cta.body':        'Επισκεφτείτε το κατάστημά μας στη Μύκονο ή τηλεφωνήστε μας για να κανονίσουμε παραλαβή.',
    'cta.primary':     'Επικοινωνήστε μαζί μας',
    'cta.secondary':   '+30 22890 22206',

    // Footer
    'footer.desc':         'Dry Cleaning, Wet Cleaning & Laundry Service στη Μύκονο και Αθήνα από το 1968. Για κατοίκους, επισκέπτες, ξενοδοχεία και βίλες.',
    'footer.services':     'Υπηρεσίες',
    'footer.visit':        'Επισκεφτείτε μας',
    'footer.hours':        'Ωράριο',
    'footer.hours.weekday':'Δευ–Σαβ: 08:00–20:00',
    'footer.hours.sunday': 'Κυρ: 09:00–14:00',
    'footer.rights':       'Όλα τα δικαιώματα διατηρούνται.',

    // Services page
    'services.page.title':   'Υπηρεσίες',
    'services.page.label':   'Τι Προσφέρουμε',
    'services.page.subtitle':'Κάθε ρούχο έχει την ιστορία του. Εμείς φροντίζουμε να παραμένει αψεγάδιαστο.',
    'services.cleaned.label':'Καθαρίζουμε',

    'svc.dry.id':    'dry-cleaning',
    'svc.dry.title': 'Στεγνοκαθάρισμα',
    'svc.dry.desc':  'Επαγγελματικό καθάρισμα με τεχνικές αιχμής για όλα τα ρούχα που δεν επιδέχονται υδατικό πλύσιμο.',
    'svc.dry.items': 'Δερμάτινα,Φορέματα,Νυφικά,Μεταξωτά,Wet Cleaning',

    'svc.laundry.id':    'laundry',
    'svc.laundry.title': 'Πλυντήριο & Σιδέρωμα',
    'svc.laundry.desc':  'Πλήρης υπηρεσία πλύσης και επαγγελματικού σιδερώματος για καθημερινά και επίσημα ρούχα.',
    'svc.laundry.items': 'Λινά,Πουκάμισα & Μπλούζες,Casual Ρούχα,Καθημερινά Ρούχα',

    'svc.home.id':    'home-textiles',
    'svc.home.title': 'Οικιακά Υφάσματα',
    'svc.home.desc':  'Εξειδικευμένη φροντίδα για όλα τα υφαντά του σπιτιού σας — παπλώματα, κουρτίνες, χαλιά και πολλά ακόμα.',
    'svc.home.items': 'Παπλώματα,Κουβέρτες,Κουρτίνες,Χαλιά,Τραπεζομάντιλα',

    'svc.hotel.id':    'hotel',
    'svc.hotel.title': 'Ξενοδοχεία & Βίλες',
    'svc.hotel.desc':  'Ειδικά προγράμματα για ξενοδοχεία, boutique βίλες και καταλύματα Airbnb της Μυκόνου. Ευέλικτο πρόγραμμα, γρήγορη παράδοση.',
    'svc.hotel.items': 'Λευκά Ξενοδοχείου,Πετσέτες,Λευκά Βίλας,Τραπεζομάντιλα Εστιατορίου,Στολές Προσωπικού',

    'b2b.label':  'Για Επιχειρήσεις',
    'b2b.title':  'Έχετε Ξενοδοχείο ή Βίλα;',
    'b2b.body':   'Προσφέρουμε εξατομικευμένα προγράμματα λευκών για καταλύματα σε όλη τη Μύκονο. Αξιόπιστη παραλαβή, γρήγορη επιστροφή, σταθερή ποιότητα — κάθε σεζόν.',
    'b2b.cta':    'Επικοινωνήστε μαζί μας',

    // About page
    'about.page.label':   'Η Ιστορία μας',
    'about.page.title':   'Περισσότερο από Καθαριστήριο.',
    'about.page.title.em':'Ένας Θεσμός της Μυκόνου.',
    'about.page.subtitle':'Από το 1968, ο αθόρυβος φύλακας των καλύτερων γκαρνταρόμπων του νησιού.',

    'about.story.label': 'Η Ιστορία μας',
    'about.story.title': 'Από το 1968',
    'about.story.body1': 'Η επιχείρησή μας δραστηριοποιείται στον χώρο της φροντίδας ρούχων από το 1968, προσφέροντας αξιόπιστες και ποιοτικές υπηρεσίες στη Μύκονο αλλά και στην Αθήνα. Με πολυετή εμπειρία και σύγχρονο εξοπλισμό, καλύπτουμε πλήρως τις ανάγκες κατοίκων και επισκεπτών, παρέχοντας επαγγελματικές λύσεις Dry Cleaning, Wet Cleaning και Laundry Service.',
    'about.story.body2': 'Στόχος μας είναι να προσφέρουμε άριστα αποτελέσματα, με σεβασμό στα υφάσματα και τις απαιτήσεις κάθε πελάτη. Πάντα με καλή διάθεση για τον καθαρισμό των ρούχων σας, η ομάδα μας θα βρίσκεται κοντά σας — για οτιδήποτε χρειαστείτε.',

    'values.label': 'Τι μας Κινεί',
    'values.title': 'Οι Αξίες μας',
    'value.1.title': 'Ακρίβεια',
    'value.1.body':  'Κάθε ραφή, κάθε ύφασμα, κάθε φινίρισμα — το χειριζόμαστε με την προσοχή που αξίζει.',
    'value.2.title': 'Διακριτικότητα',
    'value.2.body':  'Τα ρούχα σας χειρίζονται ιδιωτικά και επιστρέφονται εγκαίρως. Χωρίς παρεξηγήσεις, χωρίς ζημιές.',
    'value.3.title': 'Εμπειρία',
    'value.3.body':  'Πάνω από πέντε δεκαετίες εξειδίκευσης σημαίνουν ότι έχουμε δει — και αποκαταστήσει — σχεδόν τα πάντα.',
    'value.4.title': 'Αξιοπιστία',
    'value.4.body':  'Ξενοδοχεία και κάτοικοι μάς εμπιστεύονται κάθε σεζόν. Δεν κάνουμε εκπτώσεις στην ποιότητα.',

    'locations.label':   'Πού να μας Βρείτε',
    'locations.title':   'Αθήνα & Μύκονος',
    'locations.body':    'Λειτουργούμε δύο καταστήματα — το αρχικό μας στην Αθήνα και το κατάστημα στη Μύκονο, ανοιχτό κάθε σεζόν για να εξυπηρετεί τους κατοίκους και τον τουρισμό του νησιού.',
    'locations.cta':     'Οδηγίες',
    'location.mykonos':  'Μύκονος',
    'location.athens':   'Αθήνα',
    'location.call':     'Τηλεφωνήστε για πληροφορίες',

    // Contact page
    'contact.page.label':   'Επικοινωνία',
    'contact.page.title':   'Είμαστε Εδώ για σας',
    'contact.page.subtitle':'Επισκεφτείτε μας, τηλεφωνήστε, ή στείλτε μήνυμα — θα σας απαντήσουμε σύντομα.',
    'contact.store.title':  'Κατάστημα Μυκόνου',
    'contact.address.label':'Διεύθυνση',
    'contact.phone.label':  'Τηλέφωνο',
    'contact.hours.label':  'Ωράριο',
    'contact.instagram.label':'Instagram',
    'contact.form.name':    'Όνομα',
    'contact.form.name.ph': 'Το όνομά σας',
    'contact.form.phone':   'Τηλέφωνο',
    'contact.form.email':   'Email',
    'contact.form.service': 'Υπηρεσία',
    'contact.form.service.ph':'— Επιλέξτε υπηρεσία —',
    'contact.form.message': 'Μήνυμα',
    'contact.form.message.ph':'Πείτε μας για τα ρούχα σας ή τις ανάγκες σας…',
    'contact.form.submit':  'Αποστολή Μηνύματος',
    'contact.service.dry':  'Στεγνοκαθάρισμα',
    'contact.service.laundry':'Πλυντήριο & Σιδέρωμα',
    'contact.service.home': 'Οικιακά Υφάσματα',
    'contact.service.hotel':'Ξενοδοχείο / Βίλα',
    'contact.service.other':'Άλλο',

    // SEO
    'meta.home.title': 'Center Cleaners Ariston — Στεγνοκαθαριστήριο & Πλυντήριο στη Μύκονο',
    'meta.home.desc':  'Το αξιόπιστο στεγνοκαθαριστήριο της Μυκόνου από το 1968. Δερμάτινα, νυφικά, μεταξωτά, χαλιά και πολλά ακόμα. Τηλ: 22890 22206.',
    'meta.services.title': 'Υπηρεσίες — Center Cleaners Ariston | Στεγνοκαθαριστήριο Μύκονος',
    'meta.services.desc':  'Στεγνοκαθάρισμα, πλυντήριο, σιδέρωμα, οικιακά υφάσματα και προγράμματα για ξενοδοχεία & βίλες στη Μύκονο.',
    'meta.about.title':    'Σχετικά — Center Cleaners Ariston | Από το 1968, Μύκονος',
    'meta.about.desc':     'Η ιστορία του Center Cleaners Ariston — ένα οικογενειακό στεγνοκαθαριστήριο στη Μύκονο και Αθήνα από το 1968.',
    'meta.contact.title':  'Επικοινωνία — Center Cleaners Ariston | Στεγνοκαθαριστήριο Μύκονος',
    'meta.contact.desc':   'Επισκεφτείτε μας στη Μύκονο, καλέστε 22890 22206, ή στείλτε μήνυμα. Δευ–Σαβ 08:00–20:00, Κυρ 09:00–14:00.',
  },

  en: {
    // Nav
    'nav.home':    'Home',
    'nav.services':'Services',
    'nav.about':   'About',
    'nav.contact': 'Contact',
    'nav.call':    'Call Us',
    'nav.lang':    'ΕΛ',

    // Hero
    'hero.label':        'Mykonos, Greece · Est. 1968',
    'hero.title':        "The Island's Finest",
    'hero.title.em':     'Dry Cleaning',
    'hero.title.end':    '',
    'hero.body':         'Premium garment care trusted by Mykonos\'s best hotels, villas, and discerning residents for over five decades.',
    'hero.cta.primary':  'Book a Pickup',
    'hero.cta.secondary':'Our Services',

    // Trust bar
    'trust.years.num':    '55+',
    'trust.years.label':  'Years of Experience',
    'trust.locations.num':'Athens & Mykonos',
    'trust.locations.label':'Two Locations',
    'trust.who.num':      'Hotels · Villas · Residents',
    'trust.who.label':    'We Serve',
    'trust.quality.num':  '4.9 ★',
    'trust.quality.label':'61 Google Reviews',

    // About (home)
    'about.label':  'Our Story',
    'about.title':  'A Legacy of\nImmaculate Care',
    'about.body1':  'Since 1968, Center Cleaners Ariston has been the go-to destination for premium garment care in Greece. From the heart of Athens to the sun-drenched streets of Mykonos, we\'ve built our reputation on precision, discretion, and an unwavering respect for every fabric we touch.',
    'about.body2':  'Whether it\'s a bespoke suit, a designer evening gown, or the finest hotel linens — we treat each piece as if it were irreplaceable. Because often, it is.',
    'about.cta':    'Learn Our Story',

    // Services (home)
    'services.label':  'What We Do',
    'services.title':  'Services Crafted for\nEvery Fabric',
    'services.cta':    'View All Services',

    'service.1.title': 'Dry Cleaning',
    'service.1.body':  'Dry Cleaning & Wet Cleaning for leathers, dresses, wedding gowns, silks, and all delicate garments.',
    'service.2.title': 'Laundry & Ironing',
    'service.2.body':  'Full wash-and-press service for everyday and formal garments alike.',
    'service.3.title': 'Home Textiles',
    'service.3.body':  'Quilts, blankets, curtains, carpets, and tablecloths — specialist care for every fabric in your home.',
    'service.4.title': 'Hotel & Villa Service',
    'service.4.body':  'Dedicated laundry programs for Mykonos hotels, boutique villas, and rental properties.',

    // Reviews
    'reviews.label':  'Google Reviews',
    'reviews.title':  'What Our Clients Say',
    'reviews.rating': '4.9',
    'reviews.count':  '61 reviews',

    'review.1.text':   '"Impeccable professionals! I received spotlessly clean clothes and chef uniforms on time, in the middle of peak season. You\'ve never smelled fresher laundry — just walk past the shop in Ornos and you\'ll understand. 10/10!"',
    'review.1.author': 'Konstantina Apostolidou',
    'review.2.text':   '"One of those shops that pleasantly surprise you. I trusted them with two very tricky pieces with delicate fabrics — the result was flawless. Thanos is an exceptional professional. Spotless result and a premium feel you rarely find. Highly recommended!"',
    'review.2.author': 'Dina Spyridopoulou',
    'review.3.text':   '"A wonderful combination of warmth and professionalism that always reaches perfection. A unique freshness on every garment. One try was enough to convince me — I wish the same for you!"',
    'review.3.author': 'Panos Charalampopoulοs',

    // CTA
    'cta.title':       'Ready for Immaculate Clothes?',
    'cta.body':        'Drop by our Mykonos store or call us to arrange a pickup. We\'ll take care of the rest.',
    'cta.primary':     'Contact Us',
    'cta.secondary':   '+30 22890 22206',

    // Footer
    'footer.desc':         "Dry Cleaning, Wet Cleaning & Laundry Service in Mykonos and Athens since 1968. Serving residents, visitors, hotels, and villas.",
    'footer.services':     'Services',
    'footer.visit':        'Visit Us',
    'footer.hours':        'Hours',
    'footer.hours.weekday':'Mon–Sat: 08:00–20:00',
    'footer.hours.sunday': 'Sun: 09:00–14:00',
    'footer.rights':       'All rights reserved.',

    // Services page
    'services.page.title':   'Services',
    'services.page.label':   'What We Offer',
    'services.page.subtitle':'Every garment tells a story. We make sure it stays immaculate.',
    'services.cleaned.label':'We care for',

    'svc.dry.id':    'dry-cleaning',
    'svc.dry.title': 'Dry Cleaning',
    'svc.dry.desc':  'Professional solvent-based cleaning using industry-leading techniques for all garments that cannot be wet-washed.',
    'svc.dry.items': 'Leathers,Dresses,Wedding Dresses,Silk Fabrics,Wet Cleaning',

    'svc.laundry.id':    'laundry',
    'svc.laundry.title': 'Laundry & Ironing',
    'svc.laundry.desc':  'Complete wash, dry, and press service for everyday garments and all textiles that benefit from careful machine-washing.',
    'svc.laundry.items': 'Linen Cloths,Shirts & Blouses,Casual Wear,Everyday Clothing',

    'svc.home.id':    'home-textiles',
    'svc.home.title': 'Home Textiles',
    'svc.home.desc':  'Specialist handling for all household fabrics — quilts, curtains, carpets, and more.',
    'svc.home.items': 'Quilts,Blankets,Curtains,Carpets,Tablecloths',

    'svc.hotel.id':    'hotel',
    'svc.hotel.title': 'Hotel & Villa Service',
    'svc.hotel.desc':  'Dedicated laundry and linen programs for Mykonos hotels, boutique villas, and rental properties. Flexible scheduling, bulk handling, discreet service.',
    'svc.hotel.items': 'Hotel Bedding & Towels,Villa Linen Programs,Airbnb Turnover,Restaurant Tablecloths,Staff Uniforms',

    'b2b.label':  'For Businesses',
    'b2b.title':  'Do You Run a Hotel or Villa?',
    'b2b.body':   'We offer tailored linen and garment programs for accommodations across Mykonos. Reliable pickup, fast turnaround, and consistent quality — every season.',
    'b2b.cta':    'Get in Touch',

    // About page
    'about.page.label':    'Our Story',
    'about.page.title':    'More Than a Cleaner.',
    'about.page.title.em': 'A Mykonos Institution.',
    'about.page.subtitle': "Since 1968, the island's quiet guardian of the finest wardrobes.",

    'about.story.label': 'The Beginning',
    'about.story.title': 'Est. 1968',
    'about.story.body1': 'We have been active in garment care since 1968, offering reliable, high-quality services in Mykonos and Athens. With decades of expertise and modern equipment, we fully cover the needs of residents and visitors — providing professional Dry Cleaning, Wet Cleaning, and Laundry Service.',
    'about.story.body2': "Our goal is to deliver outstanding results with full respect for each fabric and every customer's needs. Always with a smile and a genuine care for your clothes — our team is here for whatever you need.",

    'values.label': 'What Drives Us',
    'values.title': 'Our Values',
    'value.1.title': 'Precision',
    'value.1.body':  'Every stitch, every fabric, every finish — we handle it with the care it deserves.',
    'value.2.title': 'Discretion',
    'value.2.body':  "Your garments are handled privately and returned promptly. No fuss, no damage.",
    'value.3.title': 'Experience',
    'value.3.body':  "Over five decades of expertise means we've seen — and restored — nearly everything.",
    'value.4.title': 'Reliability',
    'value.4.body':  "Hotels and residents trust us season after season. We don't cut corners.",

    'locations.label':   'Where to Find Us',
    'locations.title':   'Athens & Mykonos',
    'locations.body':    "We operate two locations — our original Athens store and our Mykonos shop, open every season to serve the island's residents and hospitality industry.",
    'locations.cta':     'Get Directions',
    'location.mykonos':  'Mykonos',
    'location.athens':   'Athens',
    'location.call':     'Please call for details',

    // Contact page
    'contact.page.label':    'Get in Touch',
    'contact.page.title':    "We're Here to Help",
    'contact.page.subtitle': "Drop by, call us, or send a message — we'll get back to you promptly.",
    'contact.store.title':   'Mykonos Store',
    'contact.address.label': 'Address',
    'contact.phone.label':   'Phone',
    'contact.hours.label':   'Opening Hours',
    'contact.instagram.label':'Instagram',
    'contact.form.name':     'Name',
    'contact.form.name.ph':  'Your name',
    'contact.form.phone':    'Phone',
    'contact.form.email':    'Email',
    'contact.form.service':  'Service needed',
    'contact.form.service.ph':'— Select a service —',
    'contact.form.message':  'Message',
    'contact.form.message.ph':'Tell us about your garments or requirements…',
    'contact.form.submit':   'Send Message',
    'contact.service.dry':   'Dry Cleaning',
    'contact.service.laundry':'Laundry & Ironing',
    'contact.service.home':  'Home Textiles',
    'contact.service.hotel': 'Hotel / Villa Program',
    'contact.service.other': 'Other',

    // SEO
    'meta.home.title':     'Center Cleaners Ariston — Premium Dry Cleaning & Laundry in Mykonos',
    'meta.home.desc':      "Mykonos's trusted dry cleaning and laundry service since 1968. Leathers, wedding dresses, silks, carpets and more. Call +30 22890 22206.",
    'meta.services.title': 'Services — Center Cleaners Ariston | Mykonos Dry Cleaning',
    'meta.services.desc':  'Dry cleaning, laundry, ironing, home textiles and hotel linen programs — the full range of services at Center Cleaners Ariston, Mykonos.',
    'meta.about.title':    'About Us — Center Cleaners Ariston | Since 1968, Mykonos',
    'meta.about.desc':     'The story of Center Cleaners Ariston — a family-run dry cleaning institution in Mykonos and Athens since 1968.',
    'meta.contact.title':  'Contact — Center Cleaners Ariston | Mykonos Dry Cleaning',
    'meta.contact.desc':   'Visit us in Mykonos Town, call +30 22890 22206, or send a message. Open Mon–Sat 08:00–20:00, Sun 09:00–14:00.',
  },
} as const;

export type TranslationKey = keyof typeof ui.el;

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key] ?? key;
  };
}

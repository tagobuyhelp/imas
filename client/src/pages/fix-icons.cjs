const fs = require('fs');
const path = 'g:/Development/IMAS/client/src/pages/MbaGlobalLandingPage.tsx';
let c = fs.readFileSync(path, 'utf-8');

// Update imports
const newImports = `import {
  BookOpen, Briefcase, CheckCircle, ChevronDown, Download, ExternalLink,
  Globe, GraduationCap, Layers, MapPin, Phone, Star, Trophy, Users, Mail,
  Award, TrendingUp, Lightbulb, Medal, Building2, Wifi, HeartHandshake,
  ShieldCheck, Rocket, BriefcaseBusiness, Library, Landmark, CreditCard,
  Banknote, ClipboardCheck, School, Hotel
} from 'lucide-react'`;

c = c.replace(/import \{([\s\S]*?)\} from 'lucide-react'/, newImports);

// Fix Awards array
c = c.replace(/icon: 'military_tech'/g, 'icon: Award');
c = c.replace(/icon: 'trending_up'/g, 'icon: TrendingUp');
c = c.replace(/icon: 'emoji_objects'/g, 'icon: Lightbulb');
c = c.replace(/icon: 'workspace_premium'/g, 'icon: Medal');

// Fix Specializations array
c = c.replace(/icon: 'trending_up'/g, 'icon: TrendingUp');
c = c.replace(/icon: 'language'/g, 'icon: Globe');
c = c.replace(/icon: 'query_stats'/g, 'icon: BriefcaseBusiness');
c = c.replace(/icon: 'smart_toy'/g, 'icon: Lightbulb');
c = c.replace(/icon: 'account_balance'/g, 'icon: Landmark');

// Fix International Advantage array
c = c.replace(/icon: 'verified'/g, 'icon: ShieldCheck');
c = c.replace(/icon: 'groups'/g, 'icon: Users');
c = c.replace(/icon: 'rocket_launch'/g, 'icon: Rocket');
c = c.replace(/icon: 'work'/g, 'icon: Briefcase');

// Fix Facilities array
c = c.replace(/icon: 'hotel'/g, 'icon: Hotel');
c = c.replace(/icon: 'wifi'/g, 'icon: Wifi');
c = c.replace(/icon: 'school'/g, 'icon: School');
c = c.replace(/icon: 'support_agent'/g, 'icon: HeartHandshake');

// Fix Scholarships array
c = c.replace(/icon: 'workspace_premium'/g, 'icon: Medal');
c = c.replace(/icon: 'credit_card'/g, 'icon: CreditCard');
c = c.replace(/icon: 'public'/g, 'icon: Globe');

// Now fix the rendering
c = c.replace(/<span className="material-symbols-outlined.*?>\{a\.icon\}<\/span>/g, '<a.icon className="h-6 w-6" />');
c = c.replace(/<span className="material-symbols-outlined.*?>\{spec\.icon\}<\/span>/g, '<spec.icon className="h-5 w-5" />');
c = c.replace(/<span className="material-symbols-outlined.*?>\{item\.icon\}<\/span>/g, '<item.icon className="h-5 w-5" />');
c = c.replace(/<span className="material-symbols-outlined.*?>\{f\.icon\}<\/span>/g, '<f.icon className="h-5 w-5" />');
c = c.replace(/<span className="material-symbols-outlined.*?>\{s\.icon\}<\/span>/g, '<s.icon className="h-6 w-6" />');

// Fix specific static material symbols
// e.g. <span className="material-symbols-outlined text-[16px]">military_tech</span>
c = c.replace(/<span className="material-symbols-outlined text-\[16px\]">military_tech<\/span>/g, '<Award className="h-4 w-4" />');
c = c.replace(/<span className="material-symbols-outlined text-\[20px\] text-emerald-700">school<\/span>/g, '<School className="h-5 w-5 text-emerald-700" />');
c = c.replace(/<span className="material-symbols-outlined text-\[18px\]">savings<\/span>/g, '<Banknote className="h-5 w-5" />');
c = c.replace(/<span className="material-symbols-outlined text-\[18px\]">checklist<\/span>/g, '<ClipboardCheck className="h-5 w-5" />');
c = c.replace(/<span className="material-symbols-outlined text-\[18px\]">school<\/span>/g, '<School className="h-5 w-5" />');

fs.writeFileSync(path, c);
console.log('Fixed material symbols');

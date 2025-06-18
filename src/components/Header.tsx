
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Shield, ChevronDown, Globe } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gchea-navy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo - More modern and official */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-gchea-navy via-gchea-blue to-gchea-light-blue rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gchea-gold rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-gchea-navy" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gchea-navy font-formal tracking-tight">GCHEA</h1>
              <p className="text-sm text-gchea-steel font-medium">Conseil Mondial pour l'Accréditation</p>
              <p className="text-xs text-gchea-steel opacity-80">de l'Enseignement Supérieur</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    À Propos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-8 w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Organisation</h4>
                        <NavigationMenuLink href="#mission-vision" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold leading-none">Notre Mission et Vision</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gchea-steel">Gouvernance mondiale de l'excellence éducative</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#equipe-direction" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold leading-none">Équipe de Direction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gchea-steel">Conseil et direction exécutive</p>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Présence Mondiale</h4>
                        <NavigationMenuLink href="#bureaux-regionaux" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold leading-none">Bureaux Régionaux</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gchea-steel">120+ pays, 6 continents</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Services d'Accréditation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-8 w-[800px] lg:w-[900px] lg:grid-cols-3 bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Accréditation Institutionnelle</h4>
                        <NavigationMenuLink href="#processus-normes" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Processus et Normes</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#institutions-accreditees" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Institutions Accréditées</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Accréditation de Programmes</h4>
                        <NavigationMenuLink href="#commerce-gestion" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Commerce et Gestion</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#ingenierie-technologie" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Ingénierie et Technologie</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Ressources</h4>
                        <NavigationMenuLink href="#guides-modeles" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Guides et Modèles</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Normes de Qualité
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-8 w-[600px] bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <NavigationMenuLink href="#cadres-educatifs" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                        <div className="text-base font-semibold">Cadres Éducatifs Mondiaux</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#outils-benchmarking" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                        <div className="text-base font-semibold">Outils de Benchmarking</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Recherche et Développement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-8 w-[600px] lg:grid-cols-2 bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Technologies Éducatives</h4>
                        <NavigationMenuLink href="#ia-education" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">IA dans l'Éducation</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Partenariats</h4>
                        <NavigationMenuLink href="#subventions-recherche" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Subventions de Recherche</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Partenariats Mondiaux
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-8 w-[600px] lg:grid-cols-2 bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <NavigationMenuLink href="#collaborations-gouvernementales" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                        <div className="text-base font-semibold">Collaborations Gouvernementales</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#programmes-onu-unesco" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                        <div className="text-base font-semibold">Programmes ONU et UNESCO</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Ressources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-8 w-[600px] lg:grid-cols-2 bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Publications</h4>
                        <NavigationMenuLink href="#articles-recherche" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Articles de Recherche</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Outils</h4>
                        <NavigationMenuLink href="#auto-evaluation" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Auto-évaluation</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Actualités et Engagement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-8 w-[600px] lg:grid-cols-2 bg-white shadow-2xl rounded-xl border border-gchea-navy/10">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Dernières Actualités</h4>
                        <NavigationMenuLink href="#communiques-presse" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Communiqués de Presse</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gchea-navy mb-4">Opportunités</h4>
                        <NavigationMenuLink href="#offres-emploi" className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy hover:shadow-md">
                          <div className="text-base font-semibold">Offres d'Emploi</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#verification" className="text-gchea-navy hover:text-gchea-blue font-semibold px-6 py-3 rounded-lg hover:bg-gchea-cream transition-all duration-200">
                    Vérification
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="mailto:support@gchea.org"
              className="flex items-center text-gchea-steel hover:text-gchea-blue transition-all duration-200 font-medium group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              support@gchea.org
            </a>
            <Button className="bg-gradient-to-r from-gchea-navy to-gchea-blue hover:from-gchea-blue hover:to-gchea-navy text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Vérifier un Document
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gchea-navy hover:bg-gchea-cream rounded-xl p-3"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gchea-silver/30 py-6 animate-fade-in bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-4">
              <a href="#a-propos" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </a>
              <a href="#services-accreditation" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Services d'Accréditation
              </a>
              <a href="#normes-qualite" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Normes de Qualité
              </a>
              <a href="#recherche-developpement" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Recherche et Développement
              </a>
              <a href="#partenariats-mondiaux" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Partenariats Mondiaux
              </a>
              <a href="#ressources" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Ressources
              </a>
              <a href="#actualites-engagement" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Actualités et Engagement
              </a>
              <a href="#verification" className="text-gchea-navy hover:text-gchea-blue font-semibold py-3 px-4 rounded-lg hover:bg-gchea-cream transition-all" onClick={() => setIsMenuOpen(false)}>
                Vérification
              </a>
              <div className="pt-6 border-t border-gchea-silver/30 mt-4">
                <a
                  href="mailto:support@gchea.org"
                  className="flex items-center text-gchea-steel mb-4 px-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  support@gchea.org
                </a>
                <Button className="w-full bg-gradient-to-r from-gchea-navy to-gchea-blue text-white font-semibold py-3 rounded-xl shadow-lg mx-4">
                  Vérifier un Document
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

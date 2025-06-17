
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Shield, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gchea-purple to-gchea-light-purple rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gchea-dark-purple">GCHEA</h1>
              <p className="text-xs text-gchea-purple">Genève, Suisse</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    À Propos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] lg:w-[800px] lg:grid-cols-3">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Organisation</h4>
                        <NavigationMenuLink href="#mission" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Mission et Vision</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Notre mission mondiale</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#histoire" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Histoire et Jalons</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">25 ans d'excellence</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#leadership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Direction et Gouvernance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Conseil d'administration</p>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Présence Mondiale</h4>
                        <NavigationMenuLink href="#bureaux" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Bureaux Régionaux</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">120+ pays</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#partenariats" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Partenariats Stratégiques</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">ONU et UNESCO</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#carrieres" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Carrières chez GCHEA</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Rejoignez notre équipe</p>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Contact</h4>
                        <NavigationMenuLink href="#contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Informations de Contact</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Nous contacter</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Accréditation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[700px] lg:w-[900px] lg:grid-cols-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Institutionnelle</h4>
                        <NavigationMenuLink href="#criteres" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Critères d'Éligibilité</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#processus" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Processus de Candidature</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#normes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Normes d'Accréditation</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Programmatique</h4>
                        <NavigationMenuLink href="#business" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Commerce et Gestion</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#ingenierie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Ingénierie et Technologie</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#medecine" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Médecine et Sciences de la Santé</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#informatique" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Informatique et TI</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Spécialisées</h4>
                        <NavigationMenuLink href="#distance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Éducation à Distance</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#professionnel" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Formation Professionnelle</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#international" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Accréditation Internationale</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Statuts</h4>
                        <NavigationMenuLink href="#institutions-accreditees" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Institutions Accréditées</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#frais" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Frais et Financement</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Recherche et Innovation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Technologies Émergentes</h4>
                        <NavigationMenuLink href="#ia-apprentissage" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Apprentissage Personnalisé par IA</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#blockchain" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Vérification par Blockchain</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#realite-virtuelle" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Salles de Classe VR</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Collaborations</h4>
                        <NavigationMenuLink href="#solutions-durables" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Solutions Éducatives Durables</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#industrie-academie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Collaborations Industrie-Académie</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Initiatives Mondiales
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Pays en Développement</h4>
                        <NavigationMenuLink href="#construction-universites" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Construction d'Universités</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#bourses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Bourses et Financement</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#egalite-genres" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Promotion de l'Égalité des Sexes</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Secteurs Émergents</h4>
                        <NavigationMenuLink href="#sante-medical" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Santé et Médecine</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#stem-ia" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">STEM et IA</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#technologie-verte" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Technologie Verte</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Ressources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <NavigationMenuLink href="#publications" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Publications et Rapports</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#formations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Formations et Ateliers</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <NavigationMenuLink href="#outils" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Outils et Modèles</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">FAQ et Centre d'Aide</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#actualites" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium transition-colors duration-200 relative group px-4 py-2">
                    Actualités et Événements
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#verification" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium transition-colors duration-200 relative group px-4 py-2">
                    Vérification
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:support@gchea.org"
              className="flex items-center text-gchea-purple hover:text-gchea-bright-gold transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              support@gchea.org
            </a>
            <Button className="bg-gchea-purple hover:bg-gchea-dark-purple text-white">
              Vérifier un Document
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gchea-purple"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#a-propos" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </a>
              <a href="#accreditation" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Accréditation
              </a>
              <a href="#recherche" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Recherche et Innovation
              </a>
              <a href="#initiatives" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Initiatives Mondiales
              </a>
              <a href="#ressources" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Ressources
              </a>
              <a href="#actualites" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Actualités et Événements
              </a>
              <a href="#verification" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Vérification
              </a>
              <div className="pt-4 border-t">
                <a
                  href="mailto:support@gchea.org"
                  className="flex items-center text-gchea-purple mb-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  support@gchea.org
                </a>
                <Button className="w-full bg-gchea-purple hover:bg-gchea-dark-purple text-white">
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

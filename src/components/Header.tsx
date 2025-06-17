
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
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Organisation</h4>
                        <NavigationMenuLink href="#mission-vision" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Mission et Vision</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Notre engagement mondial</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#histoire" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Histoire et Jalons</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">25 ans d'excellence</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#equipe-direction" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Équipe de Direction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Conseil et comité exécutif</p>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Présence Mondiale</h4>
                        <NavigationMenuLink href="#bureaux-regionaux" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Bureaux Régionaux</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">120+ pays</p>
                        </NavigationMenuLink>
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
                    Services d'Accréditation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[700px] lg:w-[800px] lg:grid-cols-3">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Accréditation Institutionnelle</h4>
                        <NavigationMenuLink href="#processus-normes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Processus et Normes</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#institutions-accreditees" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Institutions Accréditées</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#mises-a-jour-statut" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Mises à Jour de Statut</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Accréditation de Programmes</h4>
                        <NavigationMenuLink href="#commerce-gestion" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Commerce et Gestion</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#ingenierie-technologie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Ingénierie et Technologie</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#sciences-sante" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Sciences de la Santé</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#informatique-ti" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Informatique et TI</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#autres-disciplines" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Autres Disciplines</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Ressources</h4>
                        <NavigationMenuLink href="#guides-modeles" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Guides et Modèles</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#structure-frais" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Structure des Frais</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">FAQ</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Normes de Qualité
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <NavigationMenuLink href="#cadres-educatifs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cadres Éducatifs Mondiaux</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#outils-benchmarking" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Outils de Benchmarking</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <NavigationMenuLink href="#exigences-conformite" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Exigences de Conformité</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#amelioration-continue" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Amélioration Continue</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Recherche et Développement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Technologies Éducatives</h4>
                        <NavigationMenuLink href="#ia-education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">IA dans l'Éducation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#applications-blockchain" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Applications Blockchain</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#apprentissage-vr-ar" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Apprentissage VR/AR</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Partenariats</h4>
                        <NavigationMenuLink href="#durabilite-education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Durabilité dans l'Éducation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#subventions-recherche" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Subventions de Recherche</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#laboratoires-innovation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Laboratoires d'Innovation</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Partenariats Mondiaux
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <NavigationMenuLink href="#collaborations-gouvernementales" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Collaborations Gouvernementales</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#programmes-onu-unesco" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Programmes ONU et UNESCO</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <NavigationMenuLink href="#reseaux-academiques" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Réseaux Académiques</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#alliances-entreprises" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Alliances d'Entreprises</div>
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
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Publications</h4>
                        <NavigationMenuLink href="#articles-recherche" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Articles de Recherche</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#rapports-annuels" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Rapports Annuels</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#notes-politiques" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Notes de Politique</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Outils</h4>
                        <NavigationMenuLink href="#auto-evaluation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Auto-évaluation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#preparation-accreditation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Préparation Accréditation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#donnees-statistiques" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Données et Statistiques</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-dark-purple hover:text-gchea-bright-gold">
                    Actualités et Engagement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Dernières Actualités</h4>
                        <NavigationMenuLink href="#communiques-presse" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Communiqués de Presse</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#couverture-medias" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Couverture Médiatique</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#calendrier-evenements" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Calendrier d'Événements</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-gchea-dark-purple">Opportunités</h4>
                        <NavigationMenuLink href="#offres-emploi" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Offres d'Emploi</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#stages" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Stages</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
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
              <a href="#services-accreditation" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Services d'Accréditation
              </a>
              <a href="#normes-qualite" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Normes de Qualité
              </a>
              <a href="#recherche-developpement" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Recherche et Développement
              </a>
              <a href="#partenariats-mondiaux" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Partenariats Mondiaux
              </a>
              <a href="#ressources" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Ressources
              </a>
              <a href="#actualites-engagement" className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Actualités et Engagement
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

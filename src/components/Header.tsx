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
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b-4 border-gchea-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - More governmental */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-gchea-navy to-gchea-blue rounded-full flex items-center justify-center seal-shadow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gchea-gold rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-gchea-navy" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gchea-navy font-formal authority-text">GCHEA</h1>
              <p className="text-sm text-gchea-steel font-medium">Conseil Mondial pour l'Accréditation</p>
              <p className="text-xs text-gchea-steel">de l'Enseignement Supérieur</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    À Propos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Organisation</h4>
                        <NavigationMenuLink href="#mission-vision" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Notre Mission et Vision</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Gouvernance mondiale de l'éducation</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#histoire" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Histoire et Jalons</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">25 ans d'autorité éducative</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#equipe-direction" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Équipe de Direction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Conseil et direction exécutive</p>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Présence Mondiale</h4>
                        <NavigationMenuLink href="#bureaux-regionaux" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Bureaux Régionaux</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Présence dans 120+ pays</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Informations de Contact</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Nous contacter</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    Services d'Accréditation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[700px] lg:w-[800px] lg:grid-cols-3">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Accréditation Institutionnelle</h4>
                        <NavigationMenuLink href="#processus-normes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Processus et Normes</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#institutions-accreditees" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Institutions Accréditées</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#mises-a-jour-statut" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Mises à Jour de Statut</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Accréditation de Programmes</h4>
                        <NavigationMenuLink href="#commerce-gestion" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Commerce et Gestion</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#ingenierie-technologie" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Ingénierie et Technologie</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#sciences-sante" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Sciences de la Santé</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#informatique-ti" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Informatique et TI</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#autres-disciplines" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Autres Disciplines</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Ressources</h4>
                        <NavigationMenuLink href="#guides-modeles" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Guides et Modèles</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#structure-frais" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Structure des Frais</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">FAQ</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    Normes de Qualité
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <NavigationMenuLink href="#cadres-educatifs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Cadres Éducatifs Mondiaux</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#outils-benchmarking" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Outils de Benchmarking</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <NavigationMenuLink href="#exigences-conformite" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Exigences de Conformité</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#amelioration-continue" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Amélioration Continue</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    Recherche et Développement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Technologies Éducatives</h4>
                        <NavigationMenuLink href="#ia-education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">IA dans l'Éducation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#applications-blockchain" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Applications Blockchain</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#apprentissage-vr-ar" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Apprentissage VR/AR</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Partenariats</h4>
                        <NavigationMenuLink href="#durabilite-education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Durabilité dans l'Éducation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#subventions-recherche" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Subventions de Recherche</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#laboratoires-innovation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Laboratoires d'Innovation</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    Partenariats Mondiaux
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <NavigationMenuLink href="#collaborations-gouvernementales" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Collaborations Gouvernementales</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#programmes-onu-unesco" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Programmes ONU et UNESCO</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <NavigationMenuLink href="#reseaux-academiques" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Réseaux Académiques</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#alliances-entreprises" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Alliances d'Entreprises</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    Ressources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Publications</h4>
                        <NavigationMenuLink href="#articles-recherche" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Articles de Recherche</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#rapports-annuels" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Rapports Annuels</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#notes-politiques" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Notes de Politique</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Outils</h4>
                        <NavigationMenuLink href="#auto-evaluation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Auto-évaluation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#preparation-accreditation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Préparation Accréditation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#donnees-statistiques" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Données et Statistiques</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gchea-navy hover:text-gchea-blue font-semibold">
                    Actualités et Engagement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Dernières Actualités</h4>
                        <NavigationMenuLink href="#communiques-presse" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Communiqués de Presse</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#couverture-medias" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Couverture Médiatique</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#calendrier-evenements" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Calendrier d'Événements</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold leading-none text-gchea-navy">Opportunités</h4>
                        <NavigationMenuLink href="#offres-emploi" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Offres d'Emploi</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#stages" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gchea-cream hover:text-gchea-navy focus:bg-gchea-cream focus:text-gchea-navy">
                          <div className="text-sm font-medium leading-none">Stages</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#verification" className="text-gchea-navy hover:text-gchea-blue font-semibold transition-colors duration-200 relative group px-4 py-2">
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
              className="flex items-center text-gchea-steel hover:text-gchea-blue transition-colors font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              support@gchea.org
            </a>
            <Button className="btn-authority">
              Vérifier un Document
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gchea-navy"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gchea-silver py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#a-propos" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </a>
              <a href="#services-accreditation" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Services d'Accréditation
              </a>
              <a href="#normes-qualite" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Normes de Qualité
              </a>
              <a href="#recherche-developpement" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Recherche et Développement
              </a>
              <a href="#partenariats-mondiaux" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Partenariats Mondiaux
              </a>
              <a href="#renforcement-capacites" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOne(false)}>
                Renforcement des Capacités
              </a>
              <a href="#ressources" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Ressources
              </a>
              <a href="#actualites-engagement" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Actualités et Engagement
              </a>
              <a href="#verification" className="text-gchea-navy hover:text-gchea-blue font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Vérification
              </a>
              <div className="pt-4 border-t border-gchea-silver">
                <a
                  href="mailto:support@gchea.org"
                  className="flex items-center text-gchea-steel mb-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  support@gchea.org
                </a>
                <Button className="w-full btn-authority">
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

import { SalesPageConfig, BonusItem, Testimonial, FaqItem } from '../types';

export const defaultConfig: SalesPageConfig = {
  announcementText: 'DESCONTO ESPECIAL • ACESSO IMEDIATO • MATERIAL EM PDF',
  heroHeadline: '+700 TREINOS PRONTOS DE VÔLEI PARA APLICAR',
  heroSubtitle: 'Pare de perder horas planejando seus treinos. Tenha mais de 700 treinos já estruturados, do básico ao avançado, para abrir, escolher e aplicar direto na quadra.',
  heroCtaText: 'QUERO ACESSAR OS +700 TREINOS',
  countdownMinutes: 11,
  basicPlanPrice: 'R$15',
  basicPlanOldPrice: 'R$29',
  basicPlanCheckoutUrl: 'https://pay.wiapy.com/ippq8cRXBeIr',
  completePlanPrice: 'R$29',
  completePlanOldPrice: 'R$183',
  completePlanCheckoutUrl: 'https://pay.wiapy.com/i--jJ3B2UuwN',
  supportWhatsapp: '5511999999999',
};

export const bonusList: BonusItem[] = [
  {
    id: 1,
    badge: 'BÔNUS 1',
    title: '1.000 EXERCÍCIOS EXTRAS',
    oldPrice: 'DE R$50',
    coverImage: '/images/bonus_1.webp',
    description: 'Uma biblioteca complementar com 1.000 exercícios para você ter ainda mais opções para variar seus treinamentos.'
  },
  {
    id: 2,
    badge: 'BÔNUS 2',
    title: '50 SISTEMAS TÁTICOS DO VÔLEI MODERNO',
    oldPrice: 'DE R$37',
    coverImage: '/images/bonus_2.webp',
    description: 'Conheça diferentes formações e movimentações ofensivas e defensivas para organizar sua equipe de forma mais estratégica.'
  },
  {
    id: 3,
    badge: 'BÔNUS 3',
    title: '75 SESSÕES DE RECEPÇÃO, DEFESA E TRANSIÇÃO',
    oldPrice: 'DE R$27',
    coverImage: '/images/bonus_3.webp',
    description: 'Treinos específicos para desenvolver fundamentos essenciais e trabalhar diferentes situações de jogo.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Professor de Vôlei',
    role: 'Professor de Vôlei',
    quote: 'Valor incrível pelo preço. Tudo organizado e pronto para aplicar.',
    rating: 5,
    avatar: ''
  },
  {
    id: 2,
    name: 'Treinador de Base',
    role: 'Treinador de Base',
    quote: 'Economizei horas de planejamento. Agora consigo preparar meus treinos muito mais rápido.',
    rating: 5,
    avatar: ''
  },
  {
    id: 3,
    name: 'Treinador de Escolinha',
    role: 'Treinador de Escolinha',
    quote: 'A variedade das sessões facilita muito minha rotina e me ajuda a não repetir sempre os mesmos exercícios.',
    rating: 5,
    avatar: ''
  },
  {
    id: 4,
    name: 'Treinador Juvenil',
    role: 'Treinador Juvenil',
    quote: 'A progressão do básico ao avançado ajuda bastante na organização dos treinamentos.',
    rating: 5,
    avatar: ''
  },
  {
    id: 5,
    name: 'Coordenador Técnico',
    role: 'Coordenador de Vôlei',
    quote: 'Excelente material! As fichas explicam passo a passo e ajudaram a padronizar os treinos no clube.',
    rating: 5,
    avatar: ''
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Os treinos já estão prontos para aplicar?',
    answer: 'Sim. As sessões já estão estruturadas e apresentam as informações necessárias para entender e aplicar o treinamento na quadra.'
  },
  {
    id: 2,
    question: 'Preciso montar os exercícios?',
    answer: 'Não. Você escolhe a sessão que deseja trabalhar, entende a proposta e utiliza a estrutura apresentada para aplicar o treino.'
  },
  {
    id: 3,
    question: 'O material serve para quais níveis?',
    answer: 'As sessões são organizadas do básico ao avançado, permitindo trabalhar diferentes níveis de desenvolvimento.'
  },
  {
    id: 4,
    question: 'Posso usar em escolinhas, clubes e projetos?',
    answer: 'Sim. O material pode ser utilizado como apoio no planejamento de diferentes tipos de treinamento de vôlei.'
  },
  {
    id: 5,
    question: 'O material é em PDF?',
    answer: 'Sim. Você recebe o material em formato digital e pode acessá-lo pelo celular, tablet ou computador.'
  },
  {
    id: 7,
    question: 'O acesso é vitalício?',
    answer: 'Sim. Após a compra, o acesso ao material é vitalício.'
  }
];


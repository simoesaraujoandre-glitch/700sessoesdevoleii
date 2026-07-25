import { SalesPageConfig, TrainingSession, BonusItem, Testimonial, FaqItem } from '../types';

import heroVideoThumb from '../assets/images/hero_video_thumb_1784674525798.jpg';

export const defaultConfig: SalesPageConfig = {
  announcementText: 'DESCONTO EXCLUSIVO SÓ HOJE • ACESSO IMEDIATO',
  heroHeadline: '+700 Sessões de Treinamento de Vôlei',
  heroSubtitle: 'Planeje meses de treinamento em minutos com +700 sessões prontas para aplicar. Mais organização, melhores resultados e atletas mais motivados desde o primeiro treino.',
  heroCtaText: 'QUERO ACESSAR AGORA!',
  countdownMinutes: 11,
  basicPlanPrice: 'R$15',
  basicPlanOldPrice: 'R$29',
  basicPlanCheckoutUrl: 'https://pay.wiapy.com/ippq8cRXBeIr',
  completePlanPrice: 'R$29',
  completePlanOldPrice: 'R$183',
  completePlanCheckoutUrl: 'https://pay.wiapy.com/i--jJ3B2UuwN',
  supportWhatsapp: '5511999999999',
};

export const heroMediaThumb = 'https://i.ibb.co/hx0HybhC/mock-removebg-preview.png';

export const mainFeatures = [
  {
    icon: 'BookOpen',
    title: '+700 Sessões Completas',
    description: 'Sessões organizadas com objetivos claros, metodologia prática e progressão técnica para facilitar a evolução dos atletas.',
    bullets: [
      'Exercícios organizados por fundamento',
      'Progressão técnica em cada sessão',
      'Acesso pelo celular, tablet ou computador'
    ]
  },
  {
    icon: 'Calendar',
    title: 'Planejamentos Passo a Passo',
    description: 'Treinos completos que facilitam o planejamento de toda a temporada.',
    bullets: [
      'Diferentes níveis de dificuldade',
      'Objetivos definidos',
      'Fácil implementação'
    ]
  },
  {
    icon: 'Users',
    title: 'Para Todas as Equipes',
    description: 'Ideal para treinadores, escolinhas, clubes e projetos esportivos.',
    bullets: [
      'Categorias infantis',
      'Categorias juvenis',
      'Equipes adultas'
    ]
  }
];

export const whyChooseUs = [
  {
    icon: 'Clock',
    text: 'Economize horas de planejamento toda semana.'
  },
  {
    icon: 'Lightbulb',
    text: 'Nunca mais fique sem ideias para seus treinos.'
  },
  {
    icon: 'Flame',
    text: 'Aumente a motivação dos seus atletas.'
  },
  {
    icon: 'LayoutGrid',
    text: 'Organize temporadas completas com facilidade.'
  },
  {
    icon: 'Video',
    text: 'Sessões detalhadas e prontas para aplicar.'
  },
  {
    icon: 'Trophy',
    text: 'Treine com uma metodologia prática e organizada.'
  }
];

export const previewSessions: TrainingSession[] = [
  {
    id: 1,
    number: '01',
    title: 'SESSÃO DE TREINO Nº 1 - SAQUE E RECEPÇÃO DE MANCHETE',
    category: 'Fundamentos',
    duration: '60 MIN',
    hasVideo: true,
    description: 'Ativação técnica de saque por baixo e por cima e postura de manchete para recepção equilibrada.',
    objectives: [
      'Dominar a mecânica de contato na bola no saque',
      'Melhorar o posicionamento de pés e braços na manchete',
      'Aumentar a precisão no passe para a zona de levantamento'
    ],
    drills: [
      { name: 'Aquecimento e Mobilidade de Ombros', time: '10 MIN', description: 'Ativação articular com bola e deslocamento.' },
      { name: 'Estação de Saque Alvo', time: '15 MIN', description: 'Saques direcionados para zonas 1, 6 e 5.' },
      { name: 'Recepção em Duplas', time: '20 MIN', description: 'Deslocamento lateral e manchete para o levantador.' },
      { name: 'Jogo Reduzido 3v3', time: '15 MIN', description: 'Aplicação com limite de 3 toques obrigatórios.' }
    ],
    courtDiagramType: 'half_court'
  },
  {
    id: 2,
    number: '02',
    title: 'SESSÃO DE TREINO Nº 2 - LEVANTAMENTO E PRECISÃO DE TOQUE',
    category: 'Levantamento',
    duration: '60 MIN',
    hasVideo: true,
    description: 'Técnica de toque, enquadramento de corpo sob a bola e precisão para bolas de ponta e meio.',
    objectives: [
      'Ajustar a postura de mãos e extensão de braços',
      'Trabalhar mobilidade de tronco para levantamentos de costas',
      'Desenvolver regularidade e ritmo na distribuição'
    ],
    drills: [
      { name: 'Toque Consecutivo de Precisão', time: '15 MIN', description: 'Toque na parede e com parceiro buscando altura constante.' },
      { name: 'Levantamento de Ponta e Saída', time: '20 MIN', description: 'Deslocamento da posição 3 para 4 e 2 após passe.' },
      { name: 'Simulação com Entrada de Infiltração', time: '15 MIN', description: 'Entrada do levantador vindo da defesa.' },
      { name: 'Volta à Calma', time: '10 MIN', description: 'Alongamento específico de pulsos e ombros.' }
    ],
    courtDiagramType: 'full_court'
  },
  {
    id: 3,
    number: '03',
    title: 'SESSÃO DE TREINO Nº 3 - ATAQUE, CORTE E TÉCNICA DE SALTO',
    category: 'Ataque',
    duration: '60 MIN',
    hasVideo: true,
    description: 'Passada de ataque (chamada), impulsão vertical, braçada e variação de golpes (diagonal e paralela).',
    objectives: [
      'Sincronizar a passada de ataque com a trajetória da bola',
      'Desenvolver a rotação de ombro e golpe seco na bola',
      'Praticar largadas e largadinhas na cobertura'
    ],
    drills: [
      { name: 'Treino de Passada de Ataque sem Bola', time: '10 MIN', description: 'Coordenação de ritmo esquerda-direita-esquerda e salto.' },
      { name: 'Ataque na Rede com Bola Presa/Lançada', time: '20 MIN', description: 'Foco na aceleração do braço e ponto mais alto do salto.' },
      { name: 'Ataque da Posição 4 contra Bloqueio', time: '15 MIN', description: 'Escolha de direção (paralela x diagonal).' },
      { name: 'Desafio de Ataque na Linha de 3m', time: '15 MIN', description: 'Precisão e potência no ataque do fundo.' }
    ],
    courtDiagramType: 'half_court'
  },
  {
    id: 4,
    number: '04',
    title: 'SESSÃO DE TREINO Nº 4 - BLOQUEIO INDIVIDUAL E DUPLO',
    category: 'Bloqueio',
    duration: '60 MIN',
    hasVideo: true,
    description: 'Deslocamento de passada cruzada/lateral, tempo de salto e invasão correta por cima da rede.',
    objectives: [
      'Aprender o posicionamento de mãos firme sobre a rede',
      'Trabalhar a leitura do levantador adversário',
      'Formar o bloqueio duplo sem deixar espaço central'
    ],
    drills: [
      { name: 'Deslocamento Lateral na Rede', time: '15 MIN', description: 'Trabalho de pés rápido e salto neutro.' },
      { name: 'Bloqueio 1v1 com Bola Lançada', time: '20 MIN', description: 'Ajuste de tempo e penetração de braços na quadra adversária.' },
      { name: 'Bloqueio Duplo Posição 2 e 3', time: '15 MIN', description: 'Fechamento de ângulo do atacante de ponta.' },
      { name: 'Reação de Bloqueio + Amortece', time: '10 MIN', description: 'Transição imediata para defesa do rebote.' }
    ],
    courtDiagramType: 'tactical_grid'
  },
  {
    id: 5,
    number: '05',
    title: 'SESSÃO DE TREINO Nº 5 - DEFESA DE CAMPO E COBERTURA',
    category: 'Defesa',
    duration: '60 MIN',
    hasVideo: true,
    description: 'Postura baixa defensiva, peixinho/mergulho, leitura de atacante e cobertura de bloqueio.',
    objectives: [
      'Aumentar o tempo de reação no fundo de quadra',
      'Desenvolver amortecimento seguro em bolas potentes',
      'Manter a organização do sistema defensivo'
    ],
    drills: [
      { name: 'Reação Rápida em Posição Baixa', time: '15 MIN', description: 'Defesa de ataques disparados do técnico na rede.' },
      { name: 'Treino de Peixinho e Rolamento', time: '15 MIN', description: 'Técnica de queda sem lesão para salvar bolas difíceis.' },
      { name: 'Cobertura do Próprio Ataque', time: '15 MIN', description: 'Posicionamento do time sob o bloqueio para recuperar amortecidas.' },
      { name: 'Rally de Defesa Contínua', time: '15 MIN', description: 'Manter a bola viva com transição rápida.' }
    ],
    courtDiagramType: 'full_court'
  },
  {
    id: 6,
    number: '06',
    title: 'SESSÃO DE TREINO Nº 6 - SISTEMAS TÁTICOS E TRANSIÇÃO',
    category: 'Tática',
    duration: '60 MIN',
    hasVideo: true,
    description: 'Organização do sistema 5x1 e 4x2 com infiltração, tática de saques e transição defesa-ataque.',
    objectives: [
      'Memorizar os rodízios e posições de infiltração',
      'Ajustar o contra-ataque após defesa bem-sucedida',
      'Comunicação clara entre líbero, levantador e atacantes'
    ],
    drills: [
      { name: 'Simulação de Rodízios 1 a 6', time: '15 MIN', description: 'Posicionamento sem erro de falta de rotação.' },
      { name: 'Transição Defesa para Contra-Ataque', time: '20 MIN', description: 'Defendeu, levantou e atacou em menos de 4 segundos.' },
      { name: 'Jogo Tático 6v6 com Pontuação Especial', time: '15 MIN', description: 'Pontos dobrados para acertos táticos treinados.' },
      { name: 'Avaliação da Sessão', time: '10 MIN', description: 'Análise coletiva das rotas e rotações.' }
    ],
    courtDiagramType: 'tactical_grid'
  }
];

export const bonusList: BonusItem[] = [
  {
    id: 1,
    badge: 'BÔNUS 1',
    title: '1000 Treinos Secretos Inspirados nas Metodologias Utilizadas pela FIVB',
    oldPrice: 'De R$ 50,00',
    coverImage: 'https://i.ibb.co/LDt6BZG3/bonus1.png',
    description: 'Descubra uma biblioteca exclusiva de exercícios e treinos inspirados nas metodologias utilizadas no vôlei de alto rendimento para desenvolver técnica, tomada de decisão e desempenho dos atletas.'
  },
  {
    id: 2,
    badge: 'BÔNUS 2',
    title: '50 Sistemas Táticos do Vôlei Moderno',
    oldPrice: 'De R$ 37,00',
    coverImage: 'https://i.ibb.co/ycDR9BY2/bonus2-removebg-preview.png',
    description: 'Conheça diferentes formações, movimentações ofensivas e defensivas para organizar sua equipe de forma profissional.'
  },
  {
    id: 3,
    badge: 'BÔNUS 3',
    title: '75 Sessões de Recepção, Defesa e Transição',
    oldPrice: 'De R$ 27,00',
    coverImage: 'https://i.ibb.co/7t4DdbQw/bonus3-removebg-preview.png',
    description: 'Treinos específicos para desenvolver fundamentos essenciais e melhorar o desempenho coletivo.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Treinador de Base',
    role: 'Treinador de Base',
    quote: 'Esse material transformou completamente a forma como organizo meus treinos.',
    rating: 5,
    avatar: 'https://i.ibb.co/3mQsc8Jn/4468f00b988ced120a27e82ffa35a64f.jpg'
  },
  {
    id: 2,
    name: 'Professor de Vôlei',
    role: 'Professor de Vôlei',
    quote: 'Valor incrível pelo preço. Tudo organizado e pronto para aplicar.',
    rating: 5,
    avatar: 'https://i.ibb.co/PvdWhMKZ/6058d8951667ee8cfc54594451877d72.jpg'
  },
  {
    id: 3,
    name: 'Treinador Juvenil',
    role: 'Treinador Juvenil',
    quote: 'A progressão das sessões é excelente e meus atletas evoluíram muito.',
    rating: 5,
    avatar: 'https://i.ibb.co/HTjZkSsq/488470220cdbdd72f73405d473a2e8f6.jpg'
  },
  {
    id: 4,
    name: 'Coach Esportivo',
    role: 'Coach Esportivo',
    quote: 'Economizei horas de planejamento. Agora consigo preparar minhas semanas em poucos minutos.',
    rating: 5,
    avatar: 'https://i.ibb.co/cKHwZWFh/2cab99b30ffd40d8c3cf21dcd79e21d6.jpg'
  },
  {
    id: 5,
    name: 'Treinador de Escolinha',
    role: 'Treinador de Escolinha',
    quote: 'A variedade das sessões é impressionante. Sempre encontro um treino diferente para aplicar.',
    rating: 5,
    avatar: 'https://i.ibb.co/3mQsc8Jn/4468f00b988ced120a27e82ffa35a64f.jpg'
  },
  {
    id: 6,
    name: 'Preparador Técnico',
    role: 'Preparador Técnico',
    quote: 'Material extremamente organizado. Facilita muito o dia a dia.',
    rating: 5,
    avatar: 'https://i.ibb.co/PvdWhMKZ/6058d8951667ee8cfc54594451877d72.jpg'
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Em qual formato receberei o material?',
    answer: 'Você receberá acesso imediato ao material em PDF, organizado e pronto para consulta pelo celular, tablet ou computador.'
  },
  {
    id: 2,
    question: 'Funciona para todas as categorias?',
    answer: 'Sim. O material atende categorias infantis, juvenis e adultas.'
  },
  {
    id: 3,
    question: 'Preciso ter experiência como treinador?',
    answer: 'Não. As sessões são organizadas de forma simples e prática, facilitando a aplicação mesmo para treinadores iniciantes.'
  },
  {
    id: 4,
    question: 'Posso usar em escolinhas, clubes e projetos sociais?',
    answer: 'Sim. O material foi desenvolvido justamente para esse público.'
  },
  {
    id: 5,
    question: 'O acesso é vitalício?',
    answer: 'Sim. Após a compra, o acesso é seu para sempre.'
  }
];

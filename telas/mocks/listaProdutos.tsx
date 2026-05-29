const lista_produto = {
    itens: {
        titulo: "Serviços",
        lista: [
            {
                id: 1,
                nome: "Pinturas Externas e Internas",
                descricao: "Repintura completa de paredes internas e externas com acabamento profissional.",
                imagem: require('../../assets/pintura.png'),
                cor: "#1565C0",
                icone: "format-paint",
                slider: [require('../../assets/pintura.png'), require('../../assets/pintura_2.png')]
            },
            {
                id: 2,
                nome: "Hidrojateamento",
                descricao: "Limpeza técnica por hidro jateamento para remover sujeira e desgastes antigos.",
                imagem: require('../../assets/hidrojateamento.png'),
                cor: "#FF8C42",
                icone: "water",
                slider: [require('../../assets/hidrojateamento.png'), require('../../assets/hidrojateamento.png')]
            },
            {
                id: 3,
                nome: "Pastilhas",
                descricao: "Instalação e recuperação de revestimentos em pastilhas com acabamento durável.",
                imagem: require('../../assets/pastilhas.png'),
                cor: "#1565C0",
                icone: "grid",
                slider: [require('../../assets/pastilhas.png'), require('../../assets/pastilhas.png')]
            },
            {
                id: 4,
                nome: "Tratamento de Trincas",
                descricao: "Intervenção e vedação profissional para reparar trincas em superfícies.",
                imagem: require('../../assets/calafetacao.png'),
                cor: "#FF8C42",
                icone: "tools",
                slider: [require('../../assets/calafetacao.png'), require('../../assets/calafetacao.png')]
            },
            {
                id: 5,
                nome: "Concreto Aparente",
                descricao: "Acabamento em concreto aparente com proteção e estilo moderno.",
                imagem: require('../../assets/concreto.png'),
                cor: "#1565C0",
                icone: "image-filter-frames",
                slider: [require('../../assets/concreto.png'), require('../../assets/concreto.png')]
            },
            {
                id: 6,
                nome: "Tijolo Aparente",
                descricao: "Acabamento rústico com tijolo aparente para fachadas e interiores.",
                imagem: require('../../assets/tijolos.png'),
                cor: "#FF8C42",
                icone: "wall",
                slider: [require('../../assets/tijolos.png'), require('../../assets/tijolos.png')]
            },
            {
                id: 7,
                nome: "Superfície Metálica",
                descricao: "Tratamento e pintura especializada para superfícies metálicas.",
                imagem: require('../../assets/superficies_metalicas.png'),
                cor: "#1565C0",
                icone: "hammer-wrench",
                slider: [require('../../assets/superficies_metalicas.png'), require('../../assets/externa.jpeg')]
            },
            {
                id: 8,
                nome: "Aplicação de Texturas",
                descricao: "Texturização personalizada para criar efeitos únicos e modernos.",
                imagem: require('../../assets/textura.png'),
                cor: "#FF8C42",
                icone: "texture-box",
                slider: [require('../../assets/textura.png'), require('../../assets/textura.png')]
            }
        ]
    }
}
export default lista_produto;
// Sistema de Notificações de Prova Social
const customers = [
    { name: 'Ana Silva', city: 'São Paulo', state: 'SP' },
    { name: 'Carlos Oliveira', city: 'Rio de Janeiro', state: 'RJ' },
    { name: 'Mariana Santos', city: 'Belo Horizonte', state: 'MG' },
    { name: 'Pedro Costa', city: 'Brasília', state: 'DF' },
    { name: 'Juliana Ferreira', city: 'Curitiba', state: 'PR' },
    { name: 'Rafael Souza', city: 'Porto Alegre', state: 'RS' },
    { name: 'Camila Lima', city: 'Salvador', state: 'BA' },
    { name: 'Lucas Alves', city: 'Fortaleza', state: 'CE' },
    { name: 'Patrícia Ribeiro', city: 'Recife', state: 'PE' },
    { name: 'Bruno Martins', city: 'Manaus', state: 'AM' },
    { name: 'Fernanda Rocha', city: 'Belém', state: 'PA' },
    { name: 'Gustavo Pereira', city: 'Goiânia', state: 'GO' },
    { name: 'Beatriz Carvalho', city: 'Campinas', state: 'SP' },
    { name: 'Thiago Araújo', city: 'São Luís', state: 'MA' },
    { name: 'Amanda Dias', city: 'Natal', state: 'RN' },
    { name: 'Felipe Rodrigues', city: 'Teresina', state: 'PI' },
    { name: 'Larissa Gomes', city: 'Maceió', state: 'AL' },
    { name: 'Rodrigo Barbosa', city: 'João Pessoa', state: 'PB' },
    { name: 'Gabriela Nascimento', city: 'Aracaju', state: 'SE' },
    { name: 'Vinícius Azevedo', city: 'Florianópolis', state: 'SC' },
    { name: 'Carolina Melo', city: 'Vitória', state: 'ES' },
    { name: 'Henrique Castro', city: 'Cuiabá', state: 'MT' },
    { name: 'Isabela Moreira', city: 'Campo Grande', state: 'MS' },
    { name: 'Diego Freitas', city: 'Porto Velho', state: 'RO' },
    { name: 'Renata Cardoso', city: 'Boa Vista', state: 'RR' },
    { name: 'Marcelo Teixeira', city: 'Macapá', state: 'AP' },
    { name: 'Paula Monteiro', city: 'Palmas', state: 'TO' },
    { name: 'Eduardo Pinto', city: 'Rio Branco', state: 'AC' },
    { name: 'Aline Correia', city: 'Santos', state: 'SP' },
    { name: 'Ricardo Farias', city: 'Niterói', state: 'RJ' },
    { name: 'Tatiana Mendes', city: 'Uberlândia', state: 'MG' },
    { name: 'Fábio Lopes', city: 'Sorocaba', state: 'SP' },
    { name: 'Vanessa Duarte', city: 'Londrina', state: 'PR' },
    { name: 'André Barros', city: 'Joinville', state: 'SC' },
    { name: 'Priscila Ramos', city: 'Caxias do Sul', state: 'RS' },
    { name: 'Leandro Cavalcanti', city: 'Feira de Santana', state: 'BA' },
    { name: 'Daniela Pires', city: 'Juiz de Fora', state: 'MG' },
    { name: 'Maurício Cunha', city: 'São José dos Campos', state: 'SP' },
    { name: 'Cristina Vieira', city: 'Ribeirão Preto', state: 'SP' },
    { name: 'Alexandre Silva', city: 'Osasco', state: 'SP' },
    { name: 'Simone Almeida', city: 'Santo André', state: 'SP' },
    { name: 'Roberto Xavier', city: 'São Bernardo', state: 'SP' },
    { name: 'Mônica Campos', city: 'Guarulhos', state: 'SP' },
    { name: 'César Machado', city: 'Campina Grande', state: 'PB' },
    { name: 'Luciana Torres', city: 'Petrolina', state: 'PE' },
    { name: 'Fernando Nunes', city: 'Imperatriz', state: 'MA' },
    { name: 'Adriana Moura', city: 'Maringá', state: 'PR' },
    { name: 'Pablo Santana', city: 'Blumenau', state: 'SC' },
    { name: 'Bianca Fonseca', city: 'Pelotas', state: 'RS' },
    { name: 'Sérgio Rangel', city: 'Ilhéus', state: 'BA' }
];

function showNotification() {
    const notification = document.getElementById('social-proof-notification');
    const randomCustomer = customers[Math.floor(Math.random() * customers.length)];

    // Atualizar conteúdo
    notification.querySelector('.notification-name').textContent = randomCustomer.name;
    notification.querySelector('.notification-location').textContent = `${randomCustomer.city} - ${randomCustomer.state}`;

    // Mostrar notificação
    notification.classList.remove('hidden');
    notification.classList.add('show');

    // Esconder após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');

        // Remover classe hide após animação
        setTimeout(() => {
            notification.classList.add('hidden');
            notification.classList.remove('hide');
        }, 400);
    }, 3000);
}

// Iniciar ciclo de notificações após 30 segundos
setTimeout(() => {
    showNotification();
    // Repetir a cada 30 segundos
    setInterval(showNotification, 30000);
}, 30000);

// ==========================================
// SISTEMA DE LIVROS 3D INTERATIVOS
// ==========================================

class Book3D {
    constructor(scene) {
        this.scene = scene;
        this.book = scene.querySelector('.book-3d');
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentRotationY = 0;
        this.currentRotationX = 0;
        this.targetRotationY = 0;
        this.targetRotationX = 0;

        this.init();
    }

    init() {
        // Mouse events
        this.scene.addEventListener('mousedown', this.onDragStart.bind(this));
        document.addEventListener('mousemove', this.onDragMove.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));

        // Touch events
        this.scene.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));

        // Iniciar com auto-rotação
        this.book.classList.add('auto-rotate');

        // Animation loop
        this.animate();
    }

    onDragStart(e) {
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.book.classList.remove('auto-rotate');
    }

    onTouchStart(e) {
        e.preventDefault();
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.book.classList.remove('auto-rotate');
    }

    onDragMove(e) {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.startX;
        const deltaY = e.clientY - this.startY;

        this.targetRotationY = this.currentRotationY + deltaX * 0.5;
        this.targetRotationX = this.currentRotationX - deltaY * 0.3;

        // Limitar rotação em X
        this.targetRotationX = Math.max(-30, Math.min(30, this.targetRotationX));
    }

    onTouchMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();

        const deltaX = e.touches[0].clientX - this.startX;
        const deltaY = e.touches[0].clientY - this.startY;

        this.targetRotationY = this.currentRotationY + deltaX * 0.5;
        this.targetRotationX = this.currentRotationX - deltaY * 0.3;

        // Limitar rotação em X
        this.targetRotationX = Math.max(-30, Math.min(30, this.targetRotationX));
    }

    onDragEnd() {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.currentRotationY = this.targetRotationY;
        this.currentRotationX = this.targetRotationX;

        // Retomar auto-rotação após 3 segundos de inatividade
        setTimeout(() => {
            if (!this.isDragging) {
                this.book.classList.add('auto-rotate');
                this.currentRotationY = 0;
                this.currentRotationX = 0;
                this.targetRotationY = 0;
                this.targetRotationX = 0;
            }
        }, 3000);
    }

    onTouchEnd() {
        this.onDragEnd();
    }

    animate() {
        if (!this.book.classList.contains('auto-rotate')) {
            // Suavizar rotação
            this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1;
            this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.1;

            this.book.style.transform = `rotateY(${this.currentRotationY}deg) rotateX(${this.currentRotationX}deg)`;
        }

        requestAnimationFrame(this.animate.bind(this));
    }
}

// Inicializar livros 3D
document.addEventListener('DOMContentLoaded', () => {
    const bookScenes = document.querySelectorAll('.book-3d-scene');
    bookScenes.forEach(scene => new Book3D(scene));
});

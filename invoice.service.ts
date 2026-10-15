const invoices = [{
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        name: 'Construtora Meridiano',
        email:' contato@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 12345,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '15-10-2026',
    customer: {
        name: 'Coxinhas da Lulu',
        email:'coxinhascrocrantesll@gmail.com'
    }

}, {
    id: 3,
    amount: 15240,
    status: 'paid',
    issueDate: '03-09-2026',
    dueDate: '10-09-2026',
    customer: {
        name: 'Picolé do Zé',
        email:'geladinhos@gmail.com'
    }
}];

export function findAllInvoices() {
    return-invoices;
}

export function findInvoicesById (id: number) {
     return invoices.find(element => element.id=== id);
}
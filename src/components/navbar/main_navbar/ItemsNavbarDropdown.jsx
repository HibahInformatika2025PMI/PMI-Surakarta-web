/***
 * Data items for the navbar dropdown.
 */

export const DonorDarahItems = [
  {
    id: 1,
    label: 'Prosedur & Syarat',
    route: '/prosedur-syarat-donor-darah',
    onClick: () => console.log('Prosedur & Syarat clicked')
  },
  {
    id: 2,
    label: 'Stok Darah',
    route: '/stok-darah',
    onClick: () => console.log('Stok Darah clicked')
  },
  {
    id: 3,
    label: 'Jadwal',
    route: '/jadwal',
    onClick: () => console.log('Jadwal clicked')
  },
  {
    id: 4,
    label: 'Apheresis',
    route: '/apheresis',
    onClick: () => console.log('Apheresis clicked')
  }
];
  
export const RelawanItems = [
  {
    id: 1,
    label: 'PMR',
    route: '/pmr',
    onClick: () => console.log('PMR clicked')
  },
  {
    id: 2,
    label: 'Satgana',
    route: '/satgana',
    onClick: () => console.log('Satgana clicked')
  }
];

export const YankesItems = [
  {
    id: 1,
    label: 'Klinik Pratama',
    route: '/klinik-pratama',
    onClick: () => console.log('Klinik Pratama clicked')
  }
];

export const YansosItems = [
  {
    id: 1,
    label: 'Griya Peduli',
    route: '/griya-peduli',
    onClick: () => console.log('Griya Peduli clicked')
  },
  {
    id: 2,
    label: 'Griya Bahagia',
    route: '/griya-bahagia',
    onClick: () => console.log('Griya Bahagia clicked')
  }
];

export const PendidikanItems = [
  {
    id: 1,
    label: 'Pelatihan',
    route: '/pelatihan',
    onClick: () => console.log('Pelatihan clicked')
  },
  {
    id: 2,
    label: 'Politeknik',
    isExternal: true,
    onClick: (e) => {
      e.preventDefault();
      window.open('https://akbara.ac.id/', '_blank');
    }
  }
];
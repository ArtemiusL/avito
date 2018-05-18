const getNumberFromResolutions = (resolution) => {
  switch (resolution) {
    case 'HD':
      return 0;

    case 'Full HD':
      return 1;

    case '4K':
      return 2;

    case '5K':
      return 3;

    default:
      return 0;
  }
};

export const auto = (autos, filters) => (
  autos
    .filter(item => (Number(item.year) > Number(filters.year)))
    .filter(item => (item.gearbox === filters.gearbox))
    .filter(item => (item.body_type === filters.body_type))
);

export const immovable = (immovableses, filters) => (
  immovableses
    .filter(item => (item.property_type === filters.property_type))
    .filter(item => (Number(item.square) > Number(filters.square)))
    .filter(item => (Number(item.rooms) === Number(filters.rooms)))
);

export const cameras = (camerases, filters) => (
  camerases
    .filter(item => item.camera_type === filters.camera_type)
    .filter(item => Number(item.matrix_resolution) > Number(filters.matrix_resolution))
    .filter(item =>
      getNumberFromResolutions(item.video_resolution) >
      getNumberFromResolutions(filters.video_resolution),
    )
);

export const laptops = (laptopes, filters) => (
  laptopes
    .filter(item => item.laptop_type === filters.laptop_type)
    .filter(item => Number(item.ram) > Number(filters.ram))
    .filter(item => Number(item.screen) > Number(filters.screen))
    .filter(item => item.processor === filters.processor)
);

export const byCategory = (products, category) => (
  products.filter(item => (item.category === category))
);

export const byPrice = (products, price) => (products.filter(
  item => (item.price ? Number(item.price) < Number(price) : true)));

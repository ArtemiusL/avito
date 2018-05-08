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
    .filter(item => (item.year ? item.year > filters.year : true))
    .filter(item => (item.gearbox ? item.gearbox === filters.gearbox : true))
    .filter(item => (item.body_type ? item.body_type === filters.body_type : true))
);

export const immovable = (immovableses, filters) => (
  immovableses
    .filter(item => (item.property_type === filters.property_type))
    .filter(item => (item.square > filters.square))
    .filter(item => (item.rooms === filters.rooms))
);

export const cameras = (camerases, filters) => (
  camerases
    .filter(item => item.camera_type === filters.camera_type)
    .filter(item => item.matrix_resolution > filters.matrix_resolution)
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

export const byCategory = (products, category) => (products.filter(
  item => (item.category === category)));

export const byPrice = (products, price) => (products.filter(
  item => (item.price ? item.price < price : true)));

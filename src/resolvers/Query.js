function airshows(root, args, context, info) {
  return context.prisma.airshows()
}

function parking_lots(root, args, context, info) {
  return context.prisma.parking_lots()
}

function zones(root, args, context, info) {
  return context.prisma.zones()
}

function tracking(root, args, context, info) {
  return context.prisma.tracking()
}

module.exports = {
  airshows,
  parking_lots,
  zones,
  tracking,
}
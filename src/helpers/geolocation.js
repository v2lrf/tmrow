/**
 * Get current position, using Promise instead of callbacks.
 *
 * @param {PositionOptions} options Options for Geolocation.getCurrentPosition.
 * @returns {Promise.<Position, PositionError>} Promise for current position.
 */
export default (getCurrentLocation = positionOptions => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      positionError => reject(positionError),
      positionOptions
    );
  });
});

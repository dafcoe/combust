export type GeolocationCoordinates = {
  latitude: number;
  longitude: number;
};

export type GeolocationPermissionStatus = 'prompt' | 'granted' | 'denied' | 'unavailable';

export type GeolocationError = {
  code: number;
  message: string;
};
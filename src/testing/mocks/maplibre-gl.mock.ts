import type { MapOptions, MarkerOptions } from 'maplibre-gl';

export type MockMarkerInstance = {
  addTo: ReturnType<typeof vi.fn>;
  options?: MarkerOptions;
  remove: ReturnType<typeof vi.fn>;
  setLngLat: ReturnType<typeof vi.fn>;
};

export type MockMapInstance = {
  addControl: ReturnType<typeof vi.fn>;
  easeTo: ReturnType<typeof vi.fn>;
  getBounds: ReturnType<typeof vi.fn>;
  getZoom: ReturnType<typeof vi.fn>;
  off: ReturnType<typeof vi.fn>;
  on: ReturnType<typeof vi.fn>;
  options?: MapOptions;
  remove: ReturnType<typeof vi.fn>;
  resize: ReturnType<typeof vi.fn>;
  setStyle: ReturnType<typeof vi.fn>;
};

export const createDefaultMockBounds = () => ({
  getWest: vi.fn(() => -180),
  getSouth: vi.fn(() => -85),
  getEast: vi.fn(() => 180),
  getNorth: vi.fn(() => 85),
});

export const mockAddControl = vi.fn();
export const mockSetStyle = vi.fn();
export const mockMapRemove = vi.fn();
export const mockOn = vi.fn();
export const mockOff = vi.fn();
export const mockResize = vi.fn();
export const mockEaseTo = vi.fn();
export const mockGetZoom = vi.fn((): number => 14);
export const mockGetBounds = vi.fn(createDefaultMockBounds);

export const mockMapInstance: MockMapInstance = {
  addControl: mockAddControl,
  easeTo: mockEaseTo,
  getBounds: mockGetBounds,
  getZoom: mockGetZoom,
  off: mockOff,
  on: mockOn,
  remove: mockMapRemove,
  resize: mockResize,
  setStyle: mockSetStyle,
};

export const mockSetLngLat = vi.fn().mockReturnThis();
export const mockAddTo = vi.fn().mockReturnThis();
export const mockMarkerRemove = vi.fn();
export const mockSetWorkerUrl = vi.fn();

export const mockMarkerInstances: MockMarkerInstance[] = [];

export const MockMap = vi.fn(function (options?: MapOptions) {
  mockMapInstance.options = options;
  return mockMapInstance;
});

export const MockAttributionControl = vi.fn(function (options?: unknown) {
  return { options };
});

export const MockNavigationControl = vi.fn(function (options?: unknown) {
  return { options };
});

export const MockMarker = vi.fn(function (options?: MarkerOptions) {
  const instance: MockMarkerInstance = {
    addTo: mockAddTo,
    options,
    remove: mockMarkerRemove,
    setLngLat: mockSetLngLat,
  };
  mockMarkerInstances.push(instance);
  return instance;
});

export function resetMaplibreGlMock(): void {
  mockMarkerInstances.length = 0;
  mockMapInstance.options = undefined;
  mockGetBounds.mockImplementation(createDefaultMockBounds);
  mockGetZoom.mockReturnValue(14);
  mockGetBounds.mockClear();
  mockGetZoom.mockClear();
  mockEaseTo.mockClear();
  mockOff.mockClear();
  mockAddControl.mockClear();
  mockSetStyle.mockClear();
  mockMapRemove.mockClear();
  mockOn.mockClear();
  mockResize.mockClear();
  mockSetLngLat.mockClear();
  mockAddTo.mockClear();
  mockMarkerRemove.mockClear();
  mockSetWorkerUrl.mockClear();
  MockMap.mockClear();
  MockAttributionControl.mockClear();
  MockNavigationControl.mockClear();
  MockMarker.mockClear();
}

export {
  MockAttributionControl as AttributionControl,
  MockMap as Map,
  MockMarker as Marker,
  MockNavigationControl as NavigationControl,
  mockSetWorkerUrl as setWorkerUrl,
};

export const maplibreGlMock = {
  AttributionControl: MockAttributionControl,
  Map: MockMap,
  Marker: MockMarker,
  NavigationControl: MockNavigationControl,
  setWorkerUrl: mockSetWorkerUrl,
};

export default maplibreGlMock;

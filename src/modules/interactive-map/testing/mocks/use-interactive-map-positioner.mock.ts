export const mockFlyToCoordinates = vi.fn();
export const mockFlyToUserLocation = vi.fn(async () => {});

export function resetInteractiveMapPositionerMock(): void {
  mockFlyToCoordinates.mockClear();
  mockFlyToUserLocation.mockClear();
}

export const mockUseInteractiveMapPositioner = vi.fn(() => ({
  flyToCoordinates: mockFlyToCoordinates,
  flyToUserLocation: mockFlyToUserLocation,
}));

function transformGeo(data) {
    const firstResult = data.results[0];
    return {
        formatted_query: firstResult.display_name,
        latitude: firstResult.lat,
        longitude: firstResult.lon
    };
}
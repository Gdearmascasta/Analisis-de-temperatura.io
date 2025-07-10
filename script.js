// --- CONFIGURATION ---
// Load GeoJSON data from URL
async function loadGeoJSON() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson');
        return await response.json();
    } catch (error) {
        console.error('Error loading GeoJSON:', error);
        return null;
    }
}

// --- EMBEDDED CSV DATA ---
const EMBEDDED_CSV = `Entity,Code,Year,Temperature anomaly,time
Afghanistan,AFG,2024,0.96365935,2024
Albania,ALB,2024,1.8030567,2024
Algeria,DZA,2024,1.6447657,2024
Andorra,AND,2024,1.3409745,2024
Angola,AGO,2024,0.788143,2024
Antigua and Barbuda,ATG,2024,1.0138149,2024
Argentina,ARG,2024,0.61310333,2024
Armenia,ARM,2024,1.344953,2024
Australia,AUS,2024,0.6231515,2024
Austria,AUT,2024,1.9012189,2024
Azerbaijan,AZE,2024,0.9155638,2024
Bahamas,BHS,2024,0.6574356,2024
Bahrain,BHR,2024,0.9437628,2024
Bangladesh,BGD,2024,0.6415617,2024
Belarus,BLR,2024,2.207797,2024
Belgium,BEL,2024,1.0621222,2024
Belize,BLZ,2024,1.065097,2024
Benin,BEN,2024,0.77169037,2024
Bhutan,BTN,2024,0.8978184,2024
Bolivia,BOL,2024,1.2902837,2024
Bosnia and Herzegovina,BIH,2024,2.3962412,2024
Botswana,BWA,2024,1.3184326,2024
Brazil,BRA,2024,0.7912448,2024
Brunei,BRN,2024,0.9654891,2024
Bulgaria,BGR,2024,1.8621482,2024
Burkina Faso,BFA,2024,0.6425732,2024
Burundi,BDI,2024,1.169405,2024
Cambodia,KHM,2024,0.8946822,2024
Cameroon,CMR,2024,1.0066243,2024
Canada,CAN,2024,1.9548453,2024
Cape Verde,CPV,2024,0.8282096,2024
Central African Republic,CAF,2024,1.3918,2024
Chad,TCD,2024,0.8227971,2024
Chile,CHL,2024,0.31966233,2024
China,CHN,2024,1.1581717,2024
Colombia,COL,2024,1.1851338,2024
Comoros,COM,2024,0.7102515,2024
Congo,COG,2024,1.1018134,2024
Costa Rica,CRI,2024,0.7746606,2024
Cote d'Ivoire,CIV,2024,0.7734785,2024
Croatia,HRV,2024,2.0418897,2024
Cuba,CUB,2024,0.69865435,2024
Cyprus,CYP,2024,0.885186,2024
Czechia,CZE,2024,1.9930058,2024
Democratic Republic of Congo,COD,2024,1.4729729,2024
Denmark,DNK,2024,1.010457,2024
Djibouti,DJI,2024,1.325699,2024
Dominican Republic,DOM,2024,1.0849218,2024
East Timor,TLS,2024,0.61994046,2024
Ecuador,ECU,2024,1.2167948,2024
Egypt,EGY,2024,0.9900284,2024
El Salvador,SLV,2024,0.8865886,2024
Equatorial Guinea,GNQ,2024,1.0785437,2024
Eritrea,ERI,2024,0.6090357,2024
Estonia,EST,2024,1.6922965,2024
Eswatini,SWZ,2024,0.7904751,2024
Ethiopia,ETH,2024,0.92710716,2024
Fiji,FJI,2024,0.78501254,2024
Finland,FIN,2024,1.0889037,2024
France,FRA,2024,0.7504578,2024
Gabon,GAB,2024,0.9406225,2024
Gambia,GMB,2024,0.47004223,2024
Georgia,GEO,2024,1.0443428,2024
Germany,DEU,2024,1.5575336,2024
Ghana,GHA,2024,0.92453164,2024
Greece,GRC,2024,1.7126083,2024
Greenland,GRL,2024,0.43005595,2024
Guatemala,GTM,2024,1.28236,2024
Guinea,GIN,2024,0.9341812,2024
Guinea-Bissau,GNB,2024,0.5644843,2024
Guyana,GUY,2024,1.2315949,2024
Haiti,HTI,2024,0.9330252,2024
Honduras,HND,2024,1.3163629,2024
Hungary,HUN,2024,1.8324671,2024
Iceland,ISL,2024,-0.95650023,2024
India,IND,2024,0.57244587,2024
Indonesia,IDN,2024,0.8796344,2024
Iran,IRN,2024,1.10882,2024
Iraq,IRQ,2024,0.9736614,2024
Ireland,IRL,2024,0.46039823,2024
Israel,ISR,2024,1.2342931,2024
Italy,ITA,2024,1.3331413,2024
Jamaica,JAM,2024,1.0451536,2024
Japan,JPN,2024,1.4454551,2024
Jordan,JOR,2024,1.1905769,2024
Kazakhstan,KAZ,2024,0.7833958,2024
Kenya,KEN,2024,0.8021169,2024
Kiribati,KIR,2024,0.49985537,2024
Kosovo,OWID_KOS,2024,1.6777693,2024
Kuwait,KWT,2024,0.83079606,2024
Kyrgyzstan,KGZ,2024,0.95222735,2024
Laos,LAO,2024,1.1396972,2024
Latvia,LVA,2024,1.9292632,2024
Lebanon,LBN,2024,1.4741483,2024
Lesotho,LSO,2024,1.1626004,2024
Liberia,LBR,2024,1.1583204,2024
Libya,LBY,2024,1.5572668,2024
Lithuania,LTU,2024,2.0714638,2024
Luxembourg,LUX,2024,1.0365046,2024
Madagascar,MDG,2024,0.7745455,2024
Malawi,MWI,2024,0.6648159,2024
Malaysia,MYS,2024,0.9048068,2024
Mali,MLI,2024,0.98139113,2024
Mauritania,MRT,2024,1.0272064,2024
Mauritius,MUS,2024,0.3671368,2024
Mexico,MEX,2024,1.0877486,2024
Moldova,MDA,2024,2.1701155,2024
Mongolia,MNG,2024,1.1377765,2024
Montenegro,MNE,2024,1.9249722,2024
Morocco,MAR,2024,1.4857854,2024
Mozambique,MOZ,2024,1.0030007,2024
Myanmar,MMR,2024,0.7602746,2024
Namibia,NAM,2024,1.2846528,2024
Nepal,NPL,2024,0.86878735,2024
Netherlands,NLD,2024,1.2579478,2024
New Caledonia,NCL,2024,0.5602142,2024
New Zealand,NZL,2024,0.46268156,2024
Nicaragua,NIC,2024,1.0662202,2024
Niger,NER,2024,0.6004078,2024
Nigeria,NGA,2024,0.70471764,2024
North Korea,PRK,2024,1.8356419,2024
North Macedonia,MKD,2024,1.6314411,2024
Norway,NOR,2024,1.1679968,2024
Oman,OMN,2024,0.92674035,2024
Pakistan,PAK,2024,0.704758,2024
Palestine,PSE,2024,1.035098,2024
Panama,PAN,2024,0.77382755,2024
Papua New Guinea,PNG,2024,0.860099,2024
Paraguay,PRY,2024,1.4286791,2024
Peru,PER,2024,1.2191558,2024
Philippines,PHL,2024,0.8273401,2024
Poland,POL,2024,2.1880739,2024
Portugal,PRT,2024,0.82940245,2024
Puerto Rico,PRI,2024,1.0996374,2024
Qatar,QAT,2024,0.8903942,2024
Romania,ROU,2024,2.119537,2024
Russia,RUS,2024,1.2474487,2024
Rwanda,RWA,2024,1.3497568,2024
Saint Vincent and the Grenadines,VCT,2024,1.003523,2024
Samoa,WSM,2024,0.5509103,2024
Sao Tome and Principe,STP,2024,0.74123734,2024
Saudi Arabia,SAU,2024,1.1555504,2024
Senegal,SEN,2024,0.43549633,2024
Serbia,SRB,2024,2.0625718,2024
Seychelles,SYC,2024,0.69338876,2024
Sierra Leone,SLE,2024,1.1364164,2024
Slovakia,SVK,2024,2.1164286,2024
Slovenia,SVN,2024,1.3740352,2024
Solomon Islands,SLB,2024,0.83790034,2024
Somalia,SOM,2024,1.0795614,2024
South Africa,ZAF,2024,1.0059483,2024
South Korea,KOR,2024,1.7615885,2024
South Sudan,SSD,2024,1.5061702,2024
Spain,ESP,2024,0.9031634,2024
Sri Lanka,LKA,2024,0.6918435,2024
Sudan,SDN,2024,0.5841605,2024
Suriname,SUR,2024,1.1981249,2024
Sweden,SWE,2024,0.8898261,2024
Switzerland,CHE,2024,1.4665651,2024
Syria,SYR,2024,1.5015124,2024
Tajikistan,TJK,2024,1.1331336,2024
Tanzania,TZA,2024,0.4383327,2024
Thailand,THA,2024,1.0155298,2024
Togo,TGO,2024,0.9087723,2024
Trinidad and Tobago,TTO,2024,1.0156889,2024
Tunisia,TUN,2024,1.4212494,2024
Turkey,TUR,2024,1.7049693,2024
Turkmenistan,TKM,2024,0.8112672,2024
Uganda,UGA,2024,1.0464215,2024
Ukraine,UKR,2024,2.3942368,2024
United Arab Emirates,ARE,2024,0.9827673,2024
United Kingdom,GBR,2024,0.6734039,2024
United States,USA,2024,1.1217383,2024
Uruguay,URY,2024,0.0529383,2024
Uzbekistan,UZB,2024,0.95854145,2024
Vanuatu,VUT,2024,0.63393193,2024
Venezuela,VEN,2024,1.2222146,2024
Vietnam,VNM,2024,0.94464874,2024
Yemen,YEM,2024,1.4151019,2024
Zambia,ZMB,2024,0.77405137,2024
Zimbabwe,ZWE,2024,1.3649564,2024`;

// --- GLOBAL STATE ---
let anomalyData = [];
let map, geojsonLayer;
let countryAnomalyMap = {};
let chartTimeSeries, chartComparison;

// --- UTILITY FUNCTIONS ---
function getColor(anomaly) {
    // Color scale: blue (negative), white (zero), red (positive)
    return anomaly > 2 ? '#b2182b' :
           anomaly > 1.5 ? '#ef8a62' :
           anomaly > 1 ? '#fddbc7' :
           anomaly > 0.5 ? '#ffffbf' :
           anomaly > 0 ? '#d1e5f0' :
           anomaly === 0 ? '#ffffff' :
           anomaly > -0.5 ? '#92c5de' :
           anomaly > -1 ? '#4393c3' :
           '#2166ac';
}

function updateAnomalyValue(val) {
    document.getElementById('anomaly-value').textContent = `≤ ${val}`;
}

// --- DATA LOADING ---
function loadCSVData() {
    // Parse EMBEDDED_CSV manually
    const lines = EMBEDDED_CSV.trim().split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const row = {};
        headers.forEach((header, index) => {
            const value = values[index];
            row[header.trim()] = header === "Temperature anomaly" || header === "Year" 
                ? parseFloat(value)
                : value;
        });
        return row;
    });

    anomalyData = data;
    // Build a map: country code -> anomaly
    countryAnomalyMap = {};
    data.forEach(row => {
        countryAnomalyMap[row.Code] = row["Temperature anomaly"];
    });
    return Promise.resolve(data);
}

function populateCountryDropdown() {
    const select = document.getElementById('country-select');
    // Remove old options except "Todos"
    select.innerHTML = '<option value="all">Todos</option>';
    const countries = Array.from(new Set(anomalyData.map(d => d.Entity))).sort();
    countries.forEach(country => {
        const opt = document.createElement('option');
        opt.value = country;
        opt.textContent = country;
        select.appendChild(opt);
    });
}

// --- MAP VISUALIZATION ---
function styleFeature(feature) {
    const code = feature.id;
    const anomaly = countryAnomalyMap[code];
    return {
        fillColor: anomaly !== undefined ? getColor(anomaly) : '#ccc',
        weight: 1,
        opacity: 1,
        color: '#333',
        fillOpacity: 0.8
    };
}

function onEachFeature(feature, layer) {
    const code = feature.id;
    const country = feature.properties.name;
    const anomaly = countryAnomalyMap[code];
    let content = `<h3>${country}</h3>`;
    if (anomaly !== undefined) {
        content += `<div>Anomalía: <span class="anomaly-value">${anomaly.toFixed(2)}°C</span></div>`;
    } else {
        content += `<div>Sin datos</div>`;
    }
    layer.bindPopup(content);
    layer.on({
        mouseover: function(e) {
            this.setStyle({ weight: 3, color: '#000' });
        },
        mouseout: function(e) {
            geojsonLayer.resetStyle(e.target);
        },
        click: function(e) {
            if (anomaly !== undefined) {
                updateCharts(country, code);
            }
        }
    });
}

function initMap(geojson) {
    map = L.map('map').setView([20, 0], 2);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    geojsonLayer = L.geoJson(geojson, {
        style: styleFeature,
        onEachFeature: onEachFeature
    }).addTo(map);
    
    // Add legend
    addMapLegend();
}

function updateMap() {
    geojsonLayer.setStyle(styleFeature);
}

// --- MAP LEGEND ---
function addMapLegend() {
    const legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [-1, 0, 0.5, 1, 1.5, 2];
        let labels = ['<div class="legend-title">Anomalía de Temperatura (°C)</div>'];
        for (let i = 0; i < grades.length; i++) {
            const from = grades[i];
            const to = grades[i + 1];
            labels.push(
                `<i style="background:${getColor(from + 0.01)}"></i> ${from}${to ? '&ndash;' + to : '+'}`
            );
        }
        div.innerHTML = labels.join('<br>');
        return div;
    };
    legend.addTo(map);
}

// --- CHARTS ---
function updateCharts(country, code) {
    // For this dataset, only 2024 is available, so we show a bar for the selected country and a comparison
    const countryData = anomalyData.find(d => d.Code === code);
    if (!countryData) return;

    // Time series chart (single point for now)
    if (chartTimeSeries) chartTimeSeries.destroy();
    const ctx1 = document.getElementById('time-series-chart').getContext('2d');
    chartTimeSeries = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: [countryData.Year],
            datasets: [{
                label: `Anomalía de ${countryData.Entity}`,
                data: [countryData["Temperature anomaly"]],
                borderColor: '#d63031',
                backgroundColor: 'rgba(214,48,49,0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Removed bar chart (comparison chart) as per user request
}

// --- FILTERING ---
function applyFilters() {
    const selectedCountry = document.getElementById('country-select').value;
    const maxAnomaly = parseFloat(document.getElementById('anomaly-range').value);

    // Filter countryAnomalyMap for map coloring
    countryAnomalyMap = {};
    anomalyData.forEach(row => {
        if ((selectedCountry === "all" || row.Entity === selectedCountry) &&
            row["Temperature anomaly"] <= maxAnomaly) {
            countryAnomalyMap[row.Code] = row["Temperature anomaly"];
        }
    });
    updateMap();
}

// --- MAIN INITIALIZATION ---
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const [csvData, geoJsonData] = await Promise.all([
            loadCSVData(),
            loadGeoJSON()
        ]);

        if (!geoJsonData) {
            throw new Error('Failed to load GeoJSON data');
        }

        populateCountryDropdown();
        initMap(geoJsonData);
        updateCharts(csvData[0].Entity, csvData[0].Code); // Default: first country

        // Event listeners
        document.getElementById('country-select').addEventListener('change', () => {
            applyFilters();
        });
        document.getElementById('anomaly-range').addEventListener('input', (e) => {
            updateAnomalyValue(e.target.value);
            applyFilters();
        });
    } catch (error) {
        console.error('Error initializing application:', error);
        document.getElementById('map').innerHTML = 'Error loading map data. Please try again later.';
    }
});
const data = `Entity,Code,Year,temperature_anomaly
Afghanistan,AFG,2020,-0.17106438
Afghanistan,AFG,2021,1.4529027
Afghanistan,AFG,2022,1.223075
Afghanistan,AFG,2023,1.3063666
Afghanistan,AFG,2024,0.96365935
Africa (NIAID),,2020,0.46182775
Africa (NIAID),,2021,0.5974137
Africa (NIAID),,2022,0.27907896
Africa (NIAID),,2023,0.80983955
Africa (NIAID),,2024,1.0529052
Algeria,DZA,2020,1.0175363
Algeria,DZA,2021,1.5114557
Algeria,DZA,2022,0.96859986
Algeria,DZA,2023,1.1653057
Algeria,DZA,2024,1.6447657
American Samoa,ASM,2020,0.22835524
American Samoa,ASM,2021,-0.009806474
American Samoa,ASM,2022,-0.19585688
American Samoa,ASM,2023,0.23964675
American Samoa,ASM,2024,0.5523731
Andorra,AND,2020,0.39407253
Andorra,AND,2021,-0.29819074
Andorra,AND,2022,1.7735714
Andorra,AND,2023,1.8160086
Andorra,AND,2024,1.3409745
Angola,AGO,2020,0.4016482
Angola,AGO,2021,0.34112534
Angola,AGO,2022,0.072407246
Angola,AGO,2023,0.5687213
Angola,AGO,2024,0.788143
Anguilla,AIA,2020,0.3460474
Anguilla,AIA,2021,0.1604573
Anguilla,AIA,2022,0.050578754
Anguilla,AIA,2023,0.59529465
Anguilla,AIA,2024,0.9846811
Antarctica (NIAID),,2020,0.82638043
Antarctica (NIAID),,2021,0.04579671
Antarctica (NIAID),,2022,0.5656514
Antarctica (NIAID),,2023,0.44593415
Antarctica (NIAID),,2024,0.6795049
Antigua and Barbuda,ATG,2020,0.27817598
Antigua and Barbuda,ATG,2021,0.09828249
Antigua and Barbuda,ATG,2022,-0.011758804
Antigua and Barbuda,ATG,2023,0.5117982
Antigua and Barbuda,ATG,2024,1.0138149
Arctic Ocean (NIAID),,2020,1.2052288
Arctic Ocean (NIAID),,2021,0.45440444
Arctic Ocean (NIAID),,2022,0.68912816
Arctic Ocean (NIAID),,2023,0.8045647
Arctic Ocean (NIAID),,2024,1.1016446
Argentina,ARG,2020,0.5626785
Argentina,ARG,2021,0.5455362
Argentina,ARG,2022,0.07186997
Argentina,ARG,2023,0.96324605
Argentina,ARG,2024,0.61310333
Armenia,ARM,2020,0.6108728
Armenia,ARM,2021,1.1833401
Armenia,ARM,2022,0.91634613
Armenia,ARM,2023,1.6236995
Armenia,ARM,2024,1.344953
Asia (NIAID),,2020,0.9816399
Asia (NIAID),,2021,0.4882479
Asia (NIAID),,2022,0.710583
Asia (NIAID),,2023,0.8710367
Asia (NIAID),,2024,1.068816
Australia,AUS,2020,0.41342625
Australia,AUS,2021,-0.20268767
Australia,AUS,2022,-0.2931966
Australia,AUS,2023,0.25953183
Australia,AUS,2024,0.6231515
Austria,AUT,2020,0.85367113
Austria,AUT,2021,0.010001451
Austria,AUT,2022,1.2346245
Austria,AUT,2023,1.416974
Austria,AUT,2024,1.9012189
Azerbaijan,AZE,2020,0.4848108
Azerbaijan,AZE,2021,0.9894235
Azerbaijan,AZE,2022,0.875092
Azerbaijan,AZE,2023,1.5037956
Azerbaijan,AZE,2024,0.9155638
Bahamas,BHS,2020,0.61755115
Bahamas,BHS,2021,0.41030297
Bahamas,BHS,2022,0.5198234
Bahamas,BHS,2023,0.8748412
Bahamas,BHS,2024,0.6574356
Bahrain,BHR,2020,0.54487514
Bahrain,BHR,2021,0.9787512
Bahrain,BHR,2022,0.47238827
Bahrain,BHR,2023,0.8383932
Bahrain,BHR,2024,0.9437628
Baltic Sea (NIAID),2020,1.770975
Baltic Sea (NIAID),2021,0.38275608
Baltic Sea (NIAID),2022,0.81701326
Baltic Sea (NIAID),2023,0.5475661
Baltic Sea (NIAID),2024,1.0577083
Bangladesh,BGD,2020,0.028929234
Bangladesh,BGD,2021,0.47712708
Bangladesh,BGD,2022,0.4329114
Bangladesh,BGD,2023,0.7418833
Bangladesh,BGD,2024,0.6415617
Belarus,BLR,2020,1.7906617
Belarus,BLR,2021,-0.008253078
Belarus,BLR,2022,0.524131
Belarus,BLR,2023,1.4724401
Belarus,BLR,2024,2.207797
Belgium,BEL,2020,1.2416438
Belgium,BEL,2021,-0.2183876
Belgium,BEL,2022,1.2067416
Belgium,BEL,2023,1.1760378
Belgium,BEL,2024,1.0621222
Belize,BLZ,2020,0.86107284
Belize,BLZ,2021,0.6870003
Belize,BLZ,2022,0.38579813
Belize,BLZ,2023,1.0238681
Belize,BLZ,2024,1.065097
Benin,BEN,2020,0.28773594
Benin,BEN,2021,0.75479954
Benin,BEN,2022,0.054768402
Benin,BEN,2023,0.7192836
Benin,BEN,2024,0.77169037
Bhutan,BTN,2020,0.27548882
Bhutan,BTN,2021,0.71716833
Bhutan,BTN,2022,0.58081293
Bhutan,BTN,2023,0.74490166
Bhutan,BTN,2024,0.8978184
Bolivia,BOL,2020,0.81077605
Bolivia,BOL,2021,0.20119381
Bolivia,BOL,2022,0.14319563
Bolivia,BOL,2023,1.2120886
Bolivia,BOL,2024,1.2902837
Bosnia and Herzegovina,BIH,2020,0.79092836
Bosnia and Herzegovina,BIH,2021,0.4364001
Bosnia and Herzegovina,BIH,2022,1.3135979
Bosnia and Herzegovina,BIH,2023,1.5993332
Bosnia and Herzegovina,BIH,2024,2.3962412
Botswana,BWA,2020,-0.08125162
Botswana,BWA,2021,-0.65532905
Botswana,BWA,2022,-0.3354346
Botswana,BWA,2023,0.7121978
Botswana,BWA,2024,1.3184326
Brazil,BRA,2020,0.19494851
Brazil,BRA,2021,-0.02361679
Brazil,BRA,2022,-0.20472479
Brazil,BRA,2023,0.5437419
Brazil,BRA,2024,0.7912448
Brunei,BRN,2020,0.48807272
Brunei,BRN,2021,0.23204024
Brunei,BRN,2022,0.09632286
Brunei,BRN,2023,0.6296735
Brunei,BRN,2024,0.9654891
Bulgaria,BGR,2020,0.89131516
Bulgaria,BGR,2021,0.22360836
Bulgaria,BGR,2022,0.77625686
Bulgaria,BGR,2023,1.5108228
Bulgaria,BGR,2024,1.8621482
Burkina Faso,BFA,2020,0.34137377
Burkina Faso,BFA,2021,0.7367549
Burkina Faso,BFA,2022,-0.05476761
Burkina Faso,BFA,2023,0.7157815
Burkina Faso,BFA,2024,0.6425732
Burundi,BDI,2020,0.7471242
Burundi,BDI,2021,0.44920048
Burundi,BDI,2022,0.4191785
Burundi,BDI,2023,0.7128275
Burundi,BDI,2024,1.169405
Cambodia,KHM,2020,0.3121945
Cambodia,KHM,2021,-0.11402639
Cambodia,KHM,2022,-0.103848934
Cambodia,KHM,2023,0.32120052
Cambodia,KHM,2024,0.8946822
Cameroon,CMR,2020,0.61397964
Cameroon,CMR,2021,0.57773143
Cameroon,CMR,2022,0.22283427
Cameroon,CMR,2023,0.6593167
Cameroon,CMR,2024,1.0066243
Canada,CAN,2020,0.14486949
Canada,CAN,2021,0.9466178
Canada,CAN,2022,0.12674737
Canada,CAN,2023,1.8944861
Canada,CAN,2024,1.9548453
Cape Verde,CPV,2020,0.4147606
Cape Verde,CPV,2021,0.054828327
Cape Verde,CPV,2022,0.2074383
Cape Verde,CPV,2023,1.0070552
Cape Verde,CPV,2024,0.8282096
Cayman Islands,CYM,2020,0.52480143
Cayman Islands,CYM,2021,0.34637275
Cayman Islands,CYM,2022,0.3282911
Cayman Islands,CYM,2023,0.8292244
Cayman Islands,CYM,2024,0.8141513
Central African Republic,CAF,2020,0.79228765
Central African Republic,CAF,2021,0.9628191
Central African Republic,CAF,2022,0.6095001
Central African Republic,CAF,2023,0.91112024
Central African Republic,CAF,2024,1.3918
Chad,TCD,2020,0.4065404
Chad,TCD,2021,0.6546281
Chad,TCD,2022,0.042970818
Chad,TCD,2023,1.1625899
Chad,TCD,2024,0.8227971
Chile,CHL,2020,0.45478153
Chile,CHL,2021,0.4092312
Chile,CHL,2022,-0.23876859
Chile,CHL,2023,0.52817744
Chile,CHL,2024,0.31966233
China,CHN,2020,0.42080352
China,CHN,2021,0.63759935
China,CHN,2022,0.5990717
China,CHN,2023,0.7865262
China,CHN,2024,1.1581717
Colombia,COL,2020,0.6619999
Colombia,COL,2021,0.239875
Colombia,COL,2022,0.08406194
Colombia,COL,2023,0.81734437
Colombia,COL,2024,1.1851338
Comoros,COM,2020,0.3447865
Comoros,COM,2021,0.14267413
Comoros,COM,2022,-0.082183205
Comoros,COM,2023,0.64289695
Comoros,COM,2024,0.7102515
Congo,COG,2020,0.65486735
Congo,COG,2021,0.5659445
Congo,COG,2022,0.37879467
Congo,COG,2023,0.57981426
Congo,COG,2024,1.1018134
Cook Islands,COK,2020,0.35799375
Cook Islands,COK,2021,0.4818112
Cook Islands,COK,2022,0.36867747
Cook Islands,COK,2023,-0.053240776
Cook Islands,COK,2024,0.2655077
Costa Rica,CRI,2020,0.40291786
Costa Rica,CRI,2021,-0.054183643
Costa Rica,CRI,2022,-0.14934747
Costa Rica,CRI,2023,0.67861205
Costa Rica,CRI,2024,0.7746606
Cote d'Ivoire,CIV,2020,0.4674681
Cote d'Ivoire,CIV,2021,0.495409
Cote d'Ivoire,CIV,2022,0.109432854
Cote d'Ivoire,CIV,2023,0.6794923
Cote d'Ivoire,CIV,2024,0.7734785
Croatia,HRV,2020,0.6706128
Croatia,HRV,2021,0.29536873
Croatia,HRV,2022,1.1156484
Croatia,HRV,2023,1.4871944
Croatia,HRV,2024,2.0418897
Cuba,CUB,2020,0.67977905
Cuba,CUB,2021,0.4012208
Cuba,CUB,2022,0.35715136
Cuba,CUB,2023,0.8087966
Cuba,CUB,2024,0.69865435
Cyprus,CYP,2020,0.49806944
Cyprus,CYP,2021,0.73693043
Cyprus,CYP,2022,0.14541356
Cyprus,CYP,2023,0.61902505
Cyprus,CYP,2024,0.885186
Czechia,CZE,2020,0.88734484
Czechia,CZE,2021,-0.217492
Czechia,CZE,2022,0.9938993
Czechia,CZE,2023,1.4386808
Czechia,CZE,2024,1.9930058
Democratic Republic of Congo,COD,2020,0.7267391
Democratic Republic of Congo,COD,2021,0.74430007
Democratic Republic of Congo,COD,2022,0.5090788
Democratic Republic of Congo,COD,2023,0.8154194
Democratic Republic of Congo,COD,2024,1.4729729
Denmark,DNK,2020,1.1884661
Denmark,DNK,2021,0.044187468
Denmark,DNK,2022,0.78108567
Denmark,DNK,2023,0.6311104
Denmark,DNK,2024,1.010457
Djibouti,DJI,2020,0.2926475
Djibouti,DJI,2021,0.21508329
Djibouti,DJI,2022,0.28346047
Djibouti,DJI,2023,1.0144767
Djibouti,DJI,2024,1.325699
Dominican Republic,DOM,2020,0.6332666
Dominican Republic,DOM,2021,0.24042447
Dominican Republic,DOM,2022,0.22579224
Dominican Republic,DOM,2023,0.90855914
Dominican Republic,DOM,2024,1.0849218
East Timor,TLS,2020,0.603316
East Timor,TLS,2021,0.4744277
East Timor,TLS,2022,0.33013996
East Timor,TLS,2023,0.23215723
East Timor,TLS,2024,0.61994046
Ecuador,ECU,2020,0.6820283
Ecuador,ECU,2021,0.38352728
Ecuador,ECU,2022,0.2532091
Ecuador,ECU,2023,1.1157513
Ecuador,ECU,2024,1.2167948
Egypt,EGY,2020,0.11017672
Egypt,EGY,2021,0.57591385
Egypt,EGY,2022,-0.094622456
Egypt,EGY,2023,0.7966679
Egypt,EGY,2024,0.9900284
El Salvador,SLV,2020,0.46359238
El Salvador,SLV,2021,0.66152877
El Salvador,SLV,2022,0.2795825
El Salvador,SLV,2023,1.157287
El Salvador,SLV,2024,0.8865886
Equatorial Guinea,GNQ,2020,0.81577855
Equatorial Guinea,GNQ,2021,0.64157677
Equatorial Guinea,GNQ,2022,0.4402264
Equatorial Guinea,GNQ,2023,0.76013803
Equatorial Guinea,GNQ,2024,1.0785437
Eritrea,ERI,2020,0.09936205
Eritrea,ERI,2021,0.520871
Eritrea,ERI,2022,0.31690106
Eritrea,ERI,2023,1.0926765
Eritrea,ERI,2024,0.6090357
Estonia,EST,2020,1.9325346
Estonia,EST,2021,0.14209034
Estonia,EST,2022,0.609361
Estonia,EST,2023,0.73071414
Estonia,EST,2024,1.6922965
Eswatini,SWZ,2020,0.07936867
Eswatini,SWZ,2021,-0.20368822
Eswatini,SWZ,2022,0.1518449
Eswatini,SWZ,2023,0.41208187
Eswatini,SWZ,2024,0.7904751
Ethiopia,ETH,2020,0.38806042
Ethiopia,ETH,2021,0.3727193
Ethiopia,ETH,2022,0.5849311
Ethiopia,ETH,2023,0.6470383
Ethiopia,ETH,2024,0.92710716
Falkland Islands,FLK,2020,0.47112837
Falkland Islands,FLK,2021,0.87194633
Falkland Islands,FLK,2022,0.18431754
Falkland Islands,FLK,2023,0.07761272
Falkland Islands,FLK,2024,-0.20851898
Faroe Islands,FRO,2020,0.14813848
Faroe Islands,FRO,2021,0.110578
Faroe Islands,FRO,2022,0.43584886
Faroe Islands,FRO,2023,0.2012101
Faroe Islands,FRO,2024,0.30171952
Fiji,FJI,2020,0.70728284
Fiji,FJI,2021,0.6579135
Fiji,FJI,2022,0.75111055
Fiji,FJI,2023,0.45931864
Fiji,FJI,2024,0.78501254
Finland,FIN,2020,1.7949756
Finland,FIN,2021,-0.18699332
Finland,FIN,2022,0.7206812
Finland,FIN,2023,0.2502245
Finland,FIN,2024,1.0889037
France,FRA,2020,1.060434
France,FRA,2021,-0.085178696
France,FRA,2022,1.3163683
France,FRA,2023,1.2332534
France,FRA,2024,0.7504578
French Polynesia,PYF,2020,0.119152226
French Polynesia,PYF,2021,-0.08617958
French Polynesia,PYF,2022,-0.48743263
French Polynesia,PYF,2023,0.19133997
French Polynesia,PYF,2024,0.29101753
Gabon,GAB,2020,0.7083718
Gabon,GAB,2021,0.5242303
Gabon,GAB,2022,0.37332535
Gabon,GAB,2023,0.589577
Gabon,GAB,2024,0.9406225
Gambia,GMB,2020,0.5789345
Gambia,GMB,2021,0.46096674
Gambia,GMB,2022,0.051435947
Gambia,GMB,2023,0.55855227
Gambia,GMB,2024,0.47004223
Georgia,GEO,2020,0.9660418
Georgia,GEO,2021,0.959764
Georgia,GEO,2022,0.6275465
Georgia,GEO,2023,1.2745718
Georgia,GEO,2024,1.0443428
Germany,DEU,2020,1.1459798
Germany,DEU,2021,-0.1540065
Germany,DEU,2022,1.2205321
Germany,DEU,2023,1.3108578
Germany,DEU,2024,1.5575336
Ghana,GHA,2020,0.5852895
Ghana,GHA,2021,0.73517436
Ghana,GHA,2022,0.121528625
Ghana,GHA,2023,0.591616
Ghana,GHA,2024,0.92453164
Greece,GRC,2020,0.6245168
Greece,GRC,2021,0.5777362
Greece,GRC,2022,0.4857248
Greece,GRC,2023,0.94276875
Greece,GRC,2024,1.7126083
Greenland,GRL,2020,-0.045027852
Greenland,GRL,2021,1.4116307
Greenland,GRL,2022,1.1144315
Greenland,GRL,2023,0.68144006
Greenland,GRL,2024,0.43005595
Guatemala,GTM,2020,0.88940877
Guatemala,GTM,2021,0.6935442
Guatemala,GTM,2022,0.4437882
Guatemala,GTM,2023,1.1756302
Guatemala,GTM,2024,1.28236
Guinea,GIN,2020,0.66651887
Guinea,GIN,2021,0.7302022
Guinea,GIN,2022,0.24894571
Guinea,GIN,2023,0.65127116
Guinea,GIN,2024,0.9341812
Guinea-Bissau,GNB,2020,0.5506733
Guinea-Bissau,GNB,2021,0.51387787
Guinea-Bissau,GNB,2022,0.10670996
Guinea-Bissau,GNB,2023,0.40804926
Guinea-Bissau,GNB,2024,0.5644843
Guyana,GUY,2020,0.39288393
Guyana,GUY,2021,0.0020740826
Guyana,GUY,2022,-0.14081065
Guyana,GUY,2023,0.751544
Guyana,GUY,2024,1.2315949
Haiti,HTI,2020,0.6905325
Haiti,HTI,2021,0.3042709
Haiti,HTI,2022,0.22117965
Haiti,HTI,2023,0.847688
Haiti,HTI,2024,0.9330252
Honduras,HND,2020,0.7444043
Honduras,HND,2021,0.5956664
Honduras,HND,2022,0.28978395
Honduras,HND,2023,1.1072354
Honduras,HND,2024,1.3163629
Hong Kong,HKG,2020,0.49899206
Hong Kong,HKG,2021,0.7123938
Hong Kong,HKG,2022,0.046042204
Hong Kong,HKG,2023,0.5845316
Hong Kong,HKG,2024,0.7574133
Hungary,HUN,2020,0.65498966
Hungary,HUN,2021,0.099450074
Hungary,HUN,2022,1.0699364
Hungary,HUN,2023,1.4427933
Hungary,HUN,2024,1.8324671
Iceland,ISL,2020,-0.23191194
Iceland,ISL,2021,0.08033079
Iceland,ISL,2022,-0.09324447
Iceland,ISL,2023,-0.2669504
Iceland,ISL,2024,-0.95650023
India,IND,2020,-0.0031148593
India,IND,2021,0.094714165
India,IND,2022,0.27105442
India,IND,2023,0.27688804
India,IND,2024,0.57244587
Indonesia,IDN,2020,0.53817177
Indonesia,IDN,2021,0.35387278
Indonesia,IDN,2022,0.2989416
Indonesia,IDN,2023,0.6075775
Indonesia,IDN,2024,0.8796344
Iran,IRN,2020,0.0059205294
Iran,IRN,2021,1.4097141
Iran,IRN,2022,1.1962744
Iran,IRN,2023,1.363255
Iran,IRN,2024,1.10882
Iraq,IRQ,2020,0.77668715
Iraq,IRQ,2021,1.4823354
Iraq,IRQ,2022,0.91151065
Iraq,IRQ,2023,0.95577574
Iraq,IRQ,2024,0.9736614
Ireland,IRL,2020,0.14534152
Ireland,IRL,2021,0.35533038
Ireland,IRL,2022,0.615101
Ireland,IRL,2023,0.9999037
Ireland,IRL,2024,0.46039823
Israel,ISR,2020,0.737997
Israel,ISR,2021,1.024274
Israel,ISR,2022,0.32554975
Israel,ISR,2023,1.1138636
Israel,ISR,2024,1.2342931
Italy,ITA,2020,0.6107053
Italy,ITA,2021,0.33716735
Italy,ITA,2022,1.275581
Italy,ITA,2023,1.230895
Italy,ITA,2024,1.3331413
Jamaica,JAM,2020,0.8575837
Jamaica,JAM,2021,0.5952263
Jamaica,JAM,2022,0.4527761
Jamaica,JAM,2023,1.0583409
Jamaica,JAM,2024,1.0451536
Japan,JPN,2020,0.750043
Japan,JPN,2021,0.75145483
Japan,JPN,2022,0.68784237
Japan,JPN,2023,1.43153
Japan,JPN,2024,1.4454551
Jordan,JOR,2020,0.95484406
Jordan,JOR,2021,1.2517536
Jordan,JOR,2022,0.7026782
Jordan,JOR,2023,1.1940084
Jordan,JOR,2024,1.1905769
Kazakhstan,KAZ,2020,0.94069403
Kazakhstan,KAZ,2021,0.7035485
Kazakhstan,KAZ,2022,0.84454924
Kazakhstan,KAZ,2023,1.719367
Kazakhstan,KAZ,2024,0.7833958
Kenya,KEN,2020,0.21963024
Kenya,KEN,2021,0.5517389
Kenya,KEN,2022,0.4241155
Kenya,KEN,2023,0.37261215
Kenya,KEN,2024,0.8021169
Kiribati,KIR,2020,-0.020288786
Kiribati,KIR,2021,-0.44497395
Kiribati,KIR,2022,-0.5828473
Kiribati,KIR,2023,0.6075392
Kiribati,KIR,2024,0.49985537
Kosovo,OWID_KOS,2020,0.4977723
Kosovo,OWID_KOS,2021,-0.08100963
Kosovo,OWID_KOS,2022,0.5470024
Kosovo,OWID_KOS,2023,0.9573198
Kosovo,OWID_KOS,2024,1.6777693
Kuwait,KWT,2020,0.7257065
Kuwait,KWT,2021,1.4768425
Kuwait,KWT,2022,0.93363935
Kuwait,KWT,2023,0.7411601
Kuwait,KWT,2024,0.83079606
Laos,LAO,2020,0.70957786
Laos,LAO,2021,0.34125885
Laos,LAO,2022,0.26349702
Laos,LAO,2023,0.8398712
Laos,LAO,2024,1.1396972
Latvia,LVA,2020,1.8659915
Latvia,LVA,2021,0.08194196
Latvia,LVA,2022,0.5138952
Latvia,LVA,2023,1.0216986
Latvia,LVA,2024,1.9292632
Lebanon,LBN,2020,0.9986841
Lebanon,LBN,2021,1.1374384
Lebanon,LBN,2022,0.42526892
Lebanon,LBN,2023,1.1703404
Lebanon,LBN,2024,1.4741483
Lesotho,LSO,2020,0.35860673
Lesotho,LSO,2021,-0.009093682
Lesotho,LSO,2022,0.2575136
Lesotho,LSO,2023,0.35470065
Lesotho,LSO,2024,1.1626004
Liberia,LBR,2020,0.70219785
Liberia,LBR,2021,0.5828994
Liberia,LBR,2022,0.4654223
Liberia,LBR,2023,0.8618884
Liberia,LBR,2024,1.1583204
Libya,LBY,2020,0.21716197
Libya,LBY,2021,0.9328115
Libya,LBY,2022,0.23752427
Libya,LBY,2023,0.66451126
Libya,LBY,2024,1.5572668
Lithuania,LTU,2020,1.7909771
Lithuania,LTU,2021,-0.098900735
Lithuania,LTU,2022,0.5000076
Lithuania,LTU,2023,1.3008146
Lithuania,LTU,2024,2.0714638
Luxembourg,LUX,2020,1.2817918
Luxembourg,LUX,2021,-0.29285207
Luxembourg,LUX,2022,1.3158196
Luxembourg,LUX,2023,1.2836728
Luxembourg,LUX,2024,1.0365046
Madagascar,MDG,2020,0.39141527
Madagascar,MDG,2021,0.34493813
Madagascar,MDG,2022,-0.0120647745
Madagascar,MDG,2023,0.5971287
Madagascar,MDG,2024,0.7745455
Malawi,MWI,2020,0.39393535
Malawi,MWI,2021,0.19005235
Malawi,MWI,2022,-0.121302284
Malawi,MWI,2023,0.63065386
Malawi,MWI,2024,0.6648159
Malaysia,MYS,2020,0.4944024
Malaysia,MYS,2021,0.19860204
Malaysia,MYS,2022,0.11286545
Malaysia,MYS,2023,0.5606961
Malaysia,MYS,2024,0.9048068
Mali,MLI,2020,0.5571928
Mali,MLI,2021,1.11214
Mali,MLI,2022,0.213885
Mali,MLI,2023,0.85145265
Mali,MLI,2024,0.98139113
Mauritania,MRT,2020,0.9427039
Mauritania,MRT,2021,0.965219
Mauritania,MRT,2022,0.55808336
Mauritania,MRT,2023,0.9984452
Mauritania,MRT,2024,1.0272064
Mauritius,MUS,2020,-0.08116595
Mauritius,MUS,2021,0.19074042
Mauritius,MUS,2022,-0.2210563
Mauritius,MUS,2023,0.5368171
Mauritius,MUS,2024,0.3671368
Mexico,MEX,2020,0.7226882
Mexico,MEX,2021,0.38083363
Mexico,MEX,2022,0.105547905
Mexico,MEX,2023,0.82084066
Mexico,MEX,2024,1.0877486
Moldova,MDA,2020,1.7053567
Moldova,MDA,2021,-0.33117586
Moldova,MDA,2022,0.8812782
Moldova,MDA,2023,1.8946081
Moldova,MDA,2024,2.1701155
Mongolia,MNG,2020,0.46613216
Mongolia,MNG,2021,0.81340283
Mongolia,MNG,2022,0.16232099
Mongolia,MNG,2023,0.5875061
Mongolia,MNG,2024,1.1377765
Montenegro,MNE,2019,1.020497
Montenegro,MNE,2020,0.87284225
Montenegro,MNE,2021,0.37833178
Montenegro,MNE,2022,1.0090896
Montenegro,MNE,2023,1.1834886
Montenegro,MNE,2024,1.9249722
Morocco,MAR,2020,1.0639627
Morocco,MAR,2021,0.713444
Morocco,MAR,2022,1.3499552
Morocco,MAR,2023,1.4530835
Morocco,MAR,2024,1.4857854
Mozambique,MOZ,2020,0.5119662
Mozambique,MOZ,2021,0.20384757
Mozambique,MOZ,2022,0.13489501
Mozambique,MOZ,2023,0.5674122
Mozambique,MOZ,2024,1.0030007
Myanmar,MMR,2020,0.4925704
Myanmar,MMR,2021,0.6089303
Myanmar,MMR,2022,0.34414816
Myanmar,MMR,2023,0.7395399
Myanmar,MMR,2024,0.7602746
Namibia,NAM,2020,0.49906278
Namibia,NAM,2021,-0.24745584
Namibia,NAM,2022,0.06223178
Namibia,NAM,2023,0.69126195
Namibia,NAM,2024,1.2846528
Nepal,NPL,2020,-0.2029097
Nepal,NPL,2021,0.39243913
Nepal,NPL,2022,0.53464836
Nepal,NPL,2023,0.5005951
Nepal,NPL,2024,0.86878735
Netherlands,NLD,2020,1.1118397
Netherlands,NLD,2021,-0.09739858
Netherlands,NLD,2022,1.0704597
Netherlands,NLD,2023,1.1754978
Netherlands,NLD,2024,1.2579478
New Zealand,NZL,2020,0.61358833
New Zealand,NZL,2021,0.81715035
New Zealand,NZL,2022,1.0856025
New Zealand,NZL,2023,0.8414204
New Zealand,NZL,2024,0.46268156
Nicaragua,NIC,2020,0.48728117
Nicaragua,NIC,2021,0.22474416
Nicaragua,NIC,2022,0.020486197
Nicaragua,NIC,2023,0.8009801
Nicaragua,NIC,2024,1.0662202
Nigeria,NGA,2020,0.19783704
Nigeria,NGA,2021,0.43889174
Nigeria,NGA,2022,-0.09078503
Nigeria,NGA,2023,0.58413535
Nigeria,NGA,2024,0.70471764
North Korea,PRK,2020,0.7427737
North Korea,PRK,2021,0.8671805
North Korea,PRK,2022,0.1495688
North Korea,PRK,2023,1.2147437
North Korea,PRK,2024,1.8356419
Norway,NOR,2020,1.1110052
Norway,NOR,2021,0.11437827
Norway,NOR,2022,0.7878116
Norway,NOR,2023,0.19070494
Norway,NOR,2024,1.1679968
Oceania (NIAID),,2020,0.5603352
Oceania (NIAID),,2021,0.63977915
Oceania (NIAID),,2022,0.8896304
Oceania (NIAID),,2023,0.6301194
Oceania (NIAID),,2024,0.5358031
Oman,OMN,2020,0.060756523
Oman,OMN,2021,0.34728608
Oman,OMN,2022,0.21341515
Oman,OMN,2023,0.681468
Oman,OMN,2024,0.92674035
Pakistan,PAK,2020,-0.08666074
Pakistan,PAK,2021,0.6807809
Pakistan,PAK,2022,0.7671749
Pakistan,PAK,2023,0.41301993
Pakistan,PAK,2024,0.704758
Palestine,PSE,2020,0.7560938
Palestine,PSE,2021,1.074557
Palestine,PSE,2022,0.38655224
Palestine,PSE,2023,1.1358057
Palestine,PSE,2024,1.035098
Panama,PAN,2020,0.3843697
Panama,PAN,2021,0.05304305
Panama,PAN,2022,-0.112466335
Panama,PAN,2023,0.7075011
Panama,PAN,2024,0.77382755
Papua New Guinea,PNG,2020,0.49860477
Papua New Guinea,PNG,2021,0.47956118
Papua New Guinea,PNG,2022,0.67727757
Papua New Guinea,PNG,2023,0.46167168
Papua New Guinea,PNG,2024,0.860099
Paraguay,PRY,2020,0.9513704
Paraguay,PRY,2021,0.21099503
Paraguay,PRY,2022,0.1347351
Paraguay,PRY,2023,1.417611
Paraguay,PRY,2024,1.4286791
Peru,PER,2020,0.5654993
Peru,PER,2021,0.211308
Peru,PER,2022,0.09007311
Peru,PER,2023,0.8735545
Peru,PER,2024,1.2191558
Philippines,PHL,2020,0.53956795
Philippines,PHL,2021,0.33609852
Philippines,PHL,2022,0.30611482
Philippines,PHL,2023,0.5294178
Philippines,PHL,2024,0.8273401
Poland,POL,2020,1.2688414
Poland,POL,2021,-0.121099025
Poland,POL,2022,0.7912373
Poland,POL,2023,1.3719095
Poland,POL,2024,2.1880739
Portugal,PRT,2020,0.63827485
Portugal,PRT,2021,0.1154207
Portugal,PRT,2022,1.0517495
Portugal,PRT,2023,0.9615777
Portugal,PRT,2024,0.82940245
Puerto Rico,PRI,2020,0.39392996
Puerto Rico,PRI,2021,0.2158885
Puerto Rico,PRI,2022,0.020303091
Puerto Rico,PRI,2023,0.6159075
Puerto Rico,PRI,2024,1.0996374
Qatar,QAT,2020,0.6101899
Qatar,QAT,2021,1.0529689
Qatar,QAT,2022,0.8688542
Qatar,QAT,2023,0.99056244
Qatar,QAT,2024,0.8903942
Romania,ROU,2020,1.0876927
Romania,ROU,2021,0.08099995
Romania,ROU,2022,0.91746444
Romania,ROU,2023,1.5916082
Romania,ROU,2024,2.119537
Russia,RUS,2020,2.2475843
Russia,RUS,2021,0.061609555
Russia,RUS,2022,0.9871259
Russia,RUS,2023,0.9382239
Russia,RUS,2024,1.2474487
Samoa,WSM,2020,0.30148396
Samoa,WSM,2021,-0.0022619565
Samoa,WSM,2022,-0.16947937
Samoa,WSM,2023,0.2830213
Samoa,WSM,2024,0.5509103
Saudi Arabia,SAU,2020,0.5574553
Saudi Arabia,SAU,2021,1.1754614
Saudi Arabia,SAU,2022,0.838319
Saudi Arabia,SAU,2023,0.9759929
Saudi Arabia,SAU,2024,1.1555504
Senegal,SEN,2020,0.6394126
Senegal,SEN,2021,0.7043681
Senegal,SEN,2022,0.039383728
Senegal,SEN,2023,0.6608901
Senegal,SEN,2024,0.43549633
Serbia,SRB,2020,0.5027368
Serbia,SRB,2021,0.1554924
Serbia,SRB,2022,0.82130164
Serbia,SRB,2023,1.271258
Serbia,SRB,2024,2.0625718
Sierra Leone,SLE,2020,0.67901707
Sierra Leone,SLE,2021,0.65268296
Sierra Leone,SLE,2022,0.49348292
Sierra Leone,SLE,2023,0.66549397
Sierra Leone,SLE,2024,1.1364164
Slovakia,SVK,2020,0.83684224
Slovakia,SVK,2021,-0.03626342
Slovakia,SVK,2022,1.0267199
Slovakia,SVK,2023,1.3547567
Slovakia,SVK,2024,2.1164286
Slovenia,SVN,2020,0.64410883
Slovenia,SVN,2021,0.037556887
Slovenia,SVN,2022,1.174568
Slovenia,SVN,2023,1.1852624
Slovenia,SVN,2024,1.3740352
Somalia,SOM,2020,0.5506585
Somalia,SOM,2021,0.23734014
Somalia,SOM,2022,0.34687105
Somalia,SOM,2023,0.47326055
Somalia,SOM,2024,1.0795614
South Africa,ZAF,2020,0.27061805
South Africa,ZAF,2021,-0.058073122
South Africa,ZAF,2022,0.21008547
South Africa,ZAF,2023,0.32601658
South Africa,ZAF,2024,1.0059483
South Korea,KOR,2020,0.4390225
South Korea,KOR,2021,0.7750292
South Korea,KOR,2022,0.38366652
South Korea,KOR,2023,1.087463
South Korea,KOR,2024,1.7615885
South Sudan,SSD,2020,0.30574307
South Sudan,SSD,2021,0.8854105
South Sudan,SSD,2022,0.6111191
South Sudan,SSD,2023,1.4867879
South Sudan,SSD,2024,1.5061702
Spain,ESP,2020,0.530425
Spain,ESP,2021,0.10820619
Spain,ESP,2022,1.2721088
Spain,ESP,2023,1.0564289
Spain,ESP,2024,0.9031634
Sudan,SDN,2020,0.030070463
Sudan,SDN,2021,0.60606843
Sudan,SDN,2022,-0.017706394
Sudan,SDN,2023,1.192932
Sudan,SDN,2024,0.5841605
Sweden,SWE,2020,1.656325
Sweden,SWE,2021,-0.09481155
Sweden,SWE,2022,0.7145746
Sweden,SWE,2023,-0.051393587
Sweden,SWE,2024,0.8898261
Switzerland,CHE,2020,1.101859
Switzerland,CHE,2021,-0.13008703
Switzerland,CHE,2022,1.5316387
Switzerland,CHE,2023,1.5188742
Switzerland,CHE,2024,1.4665651
Syria,SYR,2020,1.0909396
Syria,SYR,2021,1.3762485
Syria,SYR,2022,0.82326937
Syria,SYR,2023,1.1960334
Syria,SYR,2024,1.5015124
Thailand,THA,2020,0.63357115
Thailand,THA,2021,0.09331163
Thailand,THA,2022,-0.0012750626
Thailand,THA,2023,0.6695018
Thailand,THA,2024,1.0155298
Trinidad and Tobago,TTO,2020,0.30378532
Trinidad and Tobago,TTO,2021,-0.020266056
Trinidad and Tobago,TTO,2022,-0.106738724
Trinidad and Tobago,TTO,2023,0.50499773
Trinidad and Tobago,TTO,2024,1.0156889
Turkey,TUR,2020,1.1545724
Turkey,TUR,2021,0.980629
Turkey,TUR,2022,0.56931025
Turkey,TUR,2023,1.2395821
Turkey,TUR,2024,1.7049693
Ukraine,UKR,2020,1.5783153
Ukraine,UKR,2021,0.011210889
Ukraine,UKR,2022,0.7282137
Ukraine,UKR,2023,1.626283
Ukraine,UKR,2024,2.3942368
United Arab Emirates,ARE,2020,0.54658574
United Arab Emirates,ARE,2021,1.0518517
United Arab Emirates,ARE,2022,0.8365796
United Arab Emirates,ARE,2023,0.9368245
United Arab Emirates,ARE,2024,0.9827673
United Kingdom,GBR,2020,0.4768089
United Kingdom,GBR,2021,0.14705645
United Kingdom,GBR,2022,0.90376526
United Kingdom,GBR,2023,0.82799125
United Kingdom,GBR,2024,0.6734039
United States,USA,2020,0.6810333
United States,USA,2021,0.62702185
United States,USA,2022,0.2750573
United States,USA,2023,0.76156026
United States,USA,2024,1.1217383
United States Virgin Islands,VIR,2020,0.35607323
United States Virgin Islands,VIR,2021,0.15892713
United States Virgin Islands,VIR,2022,0.017798582
United States Virgin Islands,VIR,2023,0.586603
United States Virgin Islands,VIR,2024,0.96801424
Uruguay,URY,2020,0.097917795
Uruguay,URY,2021,0.16213767
Uruguay,URY,2022,-0.30868974
Uruguay,URY,2023,0.60708183
Uruguay,URY,2024,0.0529383
Vanuatu,VUT,2020,0.33893028
Vanuatu,VUT,2021,0.35367966
Vanuatu,VUT,2022,0.7637251
Vanuatu,VUT,2023,0.20768945
Vanuatu,VUT,2024,0.63393193
Venezuela,VEN,2020,0.5117696
Venezuela,VEN,2021,-0.23821735
Venezuela,VEN,2022,-0.18168958
Venezuela,VEN,2023,0.69976425
Venezuela,VEN,2024,1.2222146
Vietnam,VNM,2020,0.51862353
Vietnam,VNM,2021,0.22267771
Vietnam,VNM,2022,0.077795506
Vietnam,VNM,2023,0.62014896
Vietnam,VNM,2024,0.94464874
Yemen,YEM,2020,0.108742714
Yemen,YEM,2021,0.06850275
Yemen,YEM,2022,0.116327286
Yemen,YEM,2023,0.8452242
Yemen,YEM,2024,1.4151019
Zambia,ZMB,2020,0.13731273
Zambia,ZMB,2021,0.096189655
Zambia,ZMB,2022,-0.11240848
Zambia,ZMB,2023,0.701163
Zambia,ZMB,2024,0.77405137
Zimbabwe,ZWE,2020,0.22929335
Zimbabwe,ZWE,2021,0.01683847
Zimbabwe,ZWE,2022,0.035658598
Zimbabwe,ZWE,2023,0.7928508
Zimbabwe,ZWE,2024,1.3649564`; 

const parseData = (data) => {
    const rows = data.trim().split('\n').slice(1);
    const anomaliesByCountry = {};

    rows.forEach(row => {
        const cols = row.split(',');
        const country = cols[0];
        const year = cols[2];
        const anomaly = parseFloat(cols[3]);

        if (!anomaliesByCountry[country]) {
            anomaliesByCountry[country] = { years: [], anomalies: [] };
        }

        anomaliesByCountry[country].years.push(year);
        anomaliesByCountry[country].anomalies.push(anomaly);
    });

    return anomaliesByCountry;
};

const anomaliesByCountry = parseData(data);

// Llenar el selector de países
const countrySelect = document.getElementById('countrySelect');
Object.keys(anomaliesByCountry).forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

// Inicializar el gráfico
const ctx = document.getElementById('histogramChart').getContext('2d');
const histogramChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: anomaliesByCountry[countrySelect.value].years,
        datasets: [{
            label: `Anomalía de Temperatura en ${countrySelect.value}`,
            data: anomaliesByCountry[countrySelect.value].anomalies,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Actualizar el gráfico según la selección del país
countrySelect.addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    updateChart(selectedCountry);
});

const updateChart = (country) => {
    histogramChart.data.labels = anomaliesByCountry[country].years;
    histogramChart.data.datasets[0].data = anomaliesByCountry[country].anomalies;
    histogramChart.data.datasets[0].label = `Anomalía de Temperatura en ${country}`;
    histogramChart.update();
};

// Inicializa el gráfico con el primer país
updateChart(countrySelect.value);

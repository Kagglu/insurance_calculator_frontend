const states = ['AL', 'AK', 'AZ', 'AR', 'AS', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI',
'SC', 'SD', 'TN', 'TX', 'TT', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV',
'WI', 'WY'];


const disallowed_states = new Map([
    ['CA', 'https://www.coveredca.com/'], 
    ['CO', 'https://connectforhealthco.com/'],
    ['CT', 'www.accesshealthct.com'],
    ['DC', 'https://www.dchealthlink.com/'],
    ['ID', 'https://www.yourhealthidaho.org/'],
    ['KY', 'https://kynect.ky.gov/s/?language=en_US'],
    ['ME', 'https://coverme.gov'],
    ['MD', 'https://www.marylandhealthconnection.gov/'],
    ['MA', 'https://www.mahealthconnector.org/'],
    ['MN', 'https://www.mnsure.org/'],
    ['NV', 'https://www.nevadahealthlink.com/'],
    ['NJ', 'https://www.nj.gov/getcoverednj/'],
    ['NM', 'https://bewellnm.com/'],
    ['NY', 'https://nystateofhealth.ny.gov/'],
    ['PA', 'https://www.pennie.com'],
    ['RI', 'https://healthsourceri.com/'],
    ['VT', 'https://portal.healthconnect.vermont.gov/VTHBELand/welcome.action'],
    ['VA', 'https://www.marketplace.virginia.gov/'],
    ['WA', 'https://www.wahealthplanfinder.org/']
]);

export { states, disallowed_states};
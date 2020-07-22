export const structureString =
  '{"store":{"fileStore":{"type":"object","group":"store","name":"fileStore","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"strict":false},"enableQueries":true,"queryOptions":{"withHistory":true},"keys":{"id":{"type":"uuid","docString":"","isOptional":false,"disabled":{"validator":false},"sql":{"searchable":true,"primary":true}},"bucketName":{"type":"string","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false},"sql":{"searchable":true}},"contentLength":{"type":"number","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"convert":false,"integer":true}},"contentType":{"type":"string","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false}},"filename":{"type":"string","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false}}},"uniqueName":"StoreFileStore"},"sessionStore":{"type":"object","group":"store","name":"sessionStore","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"strict":false},"enableQueries":true,"queryOptions":{"withDates":true},"keys":{"id":{"type":"uuid","docString":"","isOptional":false,"disabled":{"validator":false},"sql":{"searchable":true,"primary":true}},"expires":{"type":"date","docString":"","isOptional":false,"disabled":{"validator":false},"sql":{"searchable":true}},"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}","disabled":{"validator":false}}},"uniqueName":"StoreSessionStore"},"jobQueue":{"type":"object","group":"store","name":"jobQueue","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"strict":false},"enableQueries":true,"queryOptions":{"withDates":true},"keys":{"id":{"type":"number","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"convert":false,"integer":true},"sql":{"searchable":true,"primary":true}},"isComplete":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","disabled":{"validator":false},"validator":{"convert":false},"sql":{"searchable":true}},"priority":{"type":"number","docString":"","isOptional":true,"defaultValue":"0","disabled":{"validator":false},"validator":{"convert":false,"integer":true}},"scheduledAt":{"type":"date","docString":"","isOptional":true,"defaultValue":"(new Date())","disabled":{"validator":false},"sql":{"searchable":true}},"name":{"type":"string","docString":"","isOptional":false,"disabled":{"validator":false},"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false},"sql":{"searchable":true}},"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}","disabled":{"validator":false}}},"uniqueName":"StoreJobQueue"}}}';
export const structure = JSON.parse(structureString);

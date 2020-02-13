module.exports = {
  name: 'my-account',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-account',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

test('dummy test', () => {
    expect(true).toBe(true);
});

// import {Extensible, ExtensibleConfig} from "../src/Extensible";
// import * as _ from "lodash";
// import {Plugin, PluginConfig} from "../src/Interfaces";
//
//
// interface ConfigBase extends ExtensibleConfig {
//     key?:string;
//     plugins?: any;
// }
// class BaseClass extends Extensible {
//     config: ConfigBase = {
//         key: 'value',
//         plugins: {}
//     };
//     constructor(config?: ConfigBase) {
//         super(config);
//
//         if (config) {
//             this.config = _.merge(this.config, config);
//         }
//     }
// }
//
// interface ConfigPluginA extends PluginConfig {
//     pluginA: string;
// }
//
// class PluginA implements Plugin {
//
//     config: ConfigPluginA = {
//         pluginA: 'defaultA',
//     };
//
//     constructor(config?: ConfigPluginA) {
//         if (config) {
//             this.config = _.merge(this.config, config);
//         }
//     }
//
//     install(parent: any) {
//
//     }
// }
//
// class PluginB implements Plugin {
//     install(parent: any) {
//
//     }
// }
//
//
// interface ConfigExtensiblePlugin extends ExtensibleConfig {
//     key?:string;
//     plugins?: any;
// }
//
// class ExtensiblePlugin extends Extensible implements Plugin {
//     config: ConfigExtensiblePlugin = {
//         key: 'ExtensiblePlugin',
//         plugins: {}
//
//     };
//     constructor(config?: ConfigBase) {
//         super(config);
//         if (config) {
//             this.config = _.merge(this.config, config);
//         }
//     }
//
//     install(parent: any) {
//
//     }
// }
//
//
//
// test('test plugins in base class plugins map', () => {
//     const baseClass = new BaseClass();
//     baseClass.use(new PluginA());
//     baseClass.use(new PluginB());
//     expect(baseClass.plugins.has('PluginA')).toBe(true);
//     expect(baseClass.plugins.has('PluginB')).toBe(true);
// });
//
//
// test('test PluginA default config', () => {
//     const baseClass = new BaseClass();
//     baseClass.use(new PluginA());
//
//     expect((baseClass.plugins.get('PluginA') as PluginA).config.pluginA).toBe('defaultA');
// });
//
//
// test('test PluginA constructor config', () => {
//     const baseClass = new BaseClass();
//     baseClass.use(new PluginA({
//         pluginA: 'foobar',
//     }));
//     expect((baseClass.plugins.get('PluginA')  as PluginA).config.pluginA).toBe('foobar');
// });
//
// test('test PluginA config from plugins-baseclass config', () => {
//     const baseClass = new BaseClass({
//         plugins: {
//             PluginA: {
//                 pluginA: 'fromBaseClass'
//             }
//         }
//     });
//     baseClass.use(new PluginA());
//     console.log(baseClass.plugins.get('PluginA'));
//     expect((baseClass.plugins.get('PluginA') as PluginA).config.pluginA).toBe('fromBaseClass');
// });
//
// test('test PluginA constructor config priority', () => {
//     const baseClass = new BaseClass({
//         plugins: {
//             PluginA: {
//                 pluginA: 'fromBaseClass'
//             }
//         }
//     });
//
//     baseClass.use(new PluginA({
//         pluginA: 'fromConstructor'
//     }));
//     expect((baseClass.plugins.get('PluginA')  as PluginA).config.pluginA).toBe('fromConstructor');
// });
//
// test('test ExtensiblePlugin', () => {
//     const baseClass = new BaseClass({
//         plugins: {
//             ExtensiblePlugin: {
//                 key: 'ExtensiblePlugin from BaseAppConfig'
//             }
//         }
//     });
//
//     const extensiblePlugin = new ExtensiblePlugin();
//     extensiblePlugin.use(new PluginA({
//         pluginA: 'fromConstructor'
//     }));
//
//     baseClass.use(extensiblePlugin);
//     expect((baseClass.plugins.get('ExtensiblePlugin')  as ExtensiblePlugin).config.key).toBe('ExtensiblePlugin from BaseAppConfig');
//
//     const extensiblePluginFromMap = baseClass.plugins.get('ExtensiblePlugin') as ExtensiblePlugin;
//
//     expect((extensiblePluginFromMap.plugins.get('PluginA') as PluginA).config.pluginA).toBe('fromConstructor');
//
// });

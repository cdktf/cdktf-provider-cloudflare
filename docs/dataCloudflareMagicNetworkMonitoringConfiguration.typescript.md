# `dataCloudflareMagicNetworkMonitoringConfiguration` Submodule <a name="`dataCloudflareMagicNetworkMonitoringConfiguration` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringConfiguration <a name="DataCloudflareMagicNetworkMonitoringConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration(scope: Construct, id: string, config: DataCloudflareMagicNetworkMonitoringConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig">DataCloudflareMagicNetworkMonitoringConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig">DataCloudflareMagicNetworkMonitoringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicNetworkMonitoringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.defaultSampling">defaultSampling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.routerIps">routerIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.warpDevices">warpDevices</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultSampling`<sup>Required</sup> <a name="defaultSampling" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.defaultSampling"></a>

```typescript
public readonly defaultSampling: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routerIps`<sup>Required</sup> <a name="routerIps" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.routerIps"></a>

```typescript
public readonly routerIps: string[];
```

- *Type:* string[]

---

##### `warpDevices`<sup>Required</sup> <a name="warpDevices" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.warpDevices"></a>

```typescript
public readonly warpDevices: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringConfigurationConfig <a name="DataCloudflareMagicNetworkMonitoringConfigurationConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicNetworkMonitoringConfigurationConfig: dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}.

---

### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicNetworkMonitoringConfigurationWarpDevices: dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get"></a>

```typescript
public get(index: number): DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp">routerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routerIp`<sup>Required</sup> <a name="routerIp" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp"></a>

```typescript
public readonly routerIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices</a>

---




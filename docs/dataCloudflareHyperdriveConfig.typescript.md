# `dataCloudflareHyperdriveConfig` Submodule <a name="`dataCloudflareHyperdriveConfig` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareHyperdriveConfig <a name="DataCloudflareHyperdriveConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig(scope: Construct, id: string, config: DataCloudflareHyperdriveConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig">DataCloudflareHyperdriveConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig">DataCloudflareHyperdriveConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetHyperdriveId">resetHyperdriveId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHyperdriveId` <a name="resetHyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.resetHyperdriveId"></a>

```typescript
public resetHyperdriveId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareHyperdriveConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareHyperdriveConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareHyperdriveConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.caching">caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference">DataCloudflareHyperdriveConfigCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.mtls">mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference">DataCloudflareHyperdriveConfigMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference">DataCloudflareHyperdriveConfigOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.originConnectionLimit">originConnectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveIdInput">hyperdriveIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveId">hyperdriveId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.caching"></a>

```typescript
public readonly caching: DataCloudflareHyperdriveConfigCachingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference">DataCloudflareHyperdriveConfigCachingOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.mtls"></a>

```typescript
public readonly mtls: DataCloudflareHyperdriveConfigMtlsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference">DataCloudflareHyperdriveConfigMtlsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.origin"></a>

```typescript
public readonly origin: DataCloudflareHyperdriveConfigOriginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference">DataCloudflareHyperdriveConfigOriginOutputReference</a>

---

##### `originConnectionLimit`<sup>Required</sup> <a name="originConnectionLimit" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.originConnectionLimit"></a>

```typescript
public readonly originConnectionLimit: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `hyperdriveIdInput`<sup>Optional</sup> <a name="hyperdriveIdInput" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveIdInput"></a>

```typescript
public readonly hyperdriveIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `hyperdriveId`<sup>Required</sup> <a name="hyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.hyperdriveId"></a>

```typescript
public readonly hyperdriveId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareHyperdriveConfigCaching <a name="DataCloudflareHyperdriveConfigCaching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareHyperdriveConfigCaching: dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching = { ... }
```


### DataCloudflareHyperdriveConfigConfig <a name="DataCloudflareHyperdriveConfigConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareHyperdriveConfigConfig: dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.accountId">accountId</a></code> | <code>string</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.hyperdriveId">hyperdriveId</a></code> | <code>string</code> | Define configurations using a unique string identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_config#account_id DataCloudflareHyperdriveConfig#account_id}

---

##### `hyperdriveId`<sup>Optional</sup> <a name="hyperdriveId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigConfig.property.hyperdriveId"></a>

```typescript
public readonly hyperdriveId: string;
```

- *Type:* string

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_config#hyperdrive_id DataCloudflareHyperdriveConfig#hyperdrive_id}

---

### DataCloudflareHyperdriveConfigMtls <a name="DataCloudflareHyperdriveConfigMtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareHyperdriveConfigMtls: dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls = { ... }
```


### DataCloudflareHyperdriveConfigOrigin <a name="DataCloudflareHyperdriveConfigOrigin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareHyperdriveConfigOrigin: dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareHyperdriveConfigCachingOutputReference <a name="DataCloudflareHyperdriveConfigCachingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.staleWhileRevalidate">staleWhileRevalidate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching">DataCloudflareHyperdriveConfigCaching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `staleWhileRevalidate`<sup>Required</sup> <a name="staleWhileRevalidate" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.staleWhileRevalidate"></a>

```typescript
public readonly staleWhileRevalidate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCachingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareHyperdriveConfigCaching;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigCaching">DataCloudflareHyperdriveConfigCaching</a>

---


### DataCloudflareHyperdriveConfigMtlsOutputReference <a name="DataCloudflareHyperdriveConfigMtlsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.caCertificateId">caCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.sslmode">sslmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls">DataCloudflareHyperdriveConfigMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.caCertificateId"></a>

```typescript
public readonly caCertificateId: string;
```

- *Type:* string

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.mtlsCertificateId"></a>

```typescript
public readonly mtlsCertificateId: string;
```

- *Type:* string

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.sslmode"></a>

```typescript
public readonly sslmode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareHyperdriveConfigMtls;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigMtls">DataCloudflareHyperdriveConfigMtls</a>

---


### DataCloudflareHyperdriveConfigOriginOutputReference <a name="DataCloudflareHyperdriveConfigOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer"></a>

```typescript
import { dataCloudflareHyperdriveConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientId">accessClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientSecret">accessClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin">DataCloudflareHyperdriveConfigOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessClientId`<sup>Required</sup> <a name="accessClientId" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientId"></a>

```typescript
public readonly accessClientId: string;
```

- *Type:* string

---

##### `accessClientSecret`<sup>Required</sup> <a name="accessClientSecret" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.accessClientSecret"></a>

```typescript
public readonly accessClientSecret: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareHyperdriveConfigOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfig.DataCloudflareHyperdriveConfigOrigin">DataCloudflareHyperdriveConfigOrigin</a>

---




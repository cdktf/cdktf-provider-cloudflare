# `dataCloudflareDnsZoneTransfersPeer` Submodule <a name="`dataCloudflareDnsZoneTransfersPeer` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersPeer <a name="DataCloudflareDnsZoneTransfersPeer" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

new dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig">DataCloudflareDnsZoneTransfersPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig">DataCloudflareDnsZoneTransfersPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isConstruct"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformElement"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.ixfrEnable">ixfrEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.tsigId">tsigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.peerIdInput">peerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ixfrEnable`<sup>Required</sup> <a name="ixfrEnable" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.ixfrEnable"></a>

```typescript
public readonly ixfrEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigId`<sup>Required</sup> <a name="tsigId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.tsigId"></a>

```typescript
public readonly tsigId: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `peerIdInput`<sup>Optional</sup> <a name="peerIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.peerIdInput"></a>

```typescript
public readonly peerIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersPeerConfig <a name="DataCloudflareDnsZoneTransfersPeerConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

const dataCloudflareDnsZoneTransfersPeerConfig: dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/dns_zone_transfers_peer#account_id DataCloudflareDnsZoneTransfersPeer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.peerId">peerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/dns_zone_transfers_peer#peer_id DataCloudflareDnsZoneTransfersPeer#peer_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/dns_zone_transfers_peer#account_id DataCloudflareDnsZoneTransfersPeer#account_id}.

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersPeer.DataCloudflareDnsZoneTransfersPeerConfig.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/dns_zone_transfers_peer#peer_id DataCloudflareDnsZoneTransfersPeer#peer_id}.

---




# `dataCloudflareDnsZoneTransfersOutgoing` Submodule <a name="`dataCloudflareDnsZoneTransfersOutgoing` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersOutgoing <a name="DataCloudflareDnsZoneTransfersOutgoing" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

new dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersOutgoingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig">DataCloudflareDnsZoneTransfersOutgoingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig">DataCloudflareDnsZoneTransfersOutgoingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct"></a>

```typescript
import { dataCloudflareDnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement"></a>

```typescript
import { dataCloudflareDnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport"></a>

```typescript
import { dataCloudflareDnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersOutgoing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersOutgoing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersOutgoing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.checkedTime">checkedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lastTransferredTime">lastTransferredTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.peers">peers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.soaSerial">soaSerial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `checkedTime`<sup>Required</sup> <a name="checkedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.checkedTime"></a>

```typescript
public readonly checkedTime: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastTransferredTime`<sup>Required</sup> <a name="lastTransferredTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lastTransferredTime"></a>

```typescript
public readonly lastTransferredTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.peers"></a>

```typescript
public readonly peers: string[];
```

- *Type:* string[]

---

##### `soaSerial`<sup>Required</sup> <a name="soaSerial" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.soaSerial"></a>

```typescript
public readonly soaSerial: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersOutgoingConfig <a name="DataCloudflareDnsZoneTransfersOutgoingConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

const dataCloudflareDnsZoneTransfersOutgoingConfig: dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/dns_zone_transfers_outgoing#zone_id DataCloudflareDnsZoneTransfersOutgoing#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/dns_zone_transfers_outgoing#zone_id DataCloudflareDnsZoneTransfersOutgoing#zone_id}.

---




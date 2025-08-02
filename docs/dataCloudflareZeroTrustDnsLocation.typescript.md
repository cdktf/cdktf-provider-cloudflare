# `dataCloudflareZeroTrustDnsLocation` Submodule <a name="`dataCloudflareZeroTrustDnsLocation` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDnsLocation <a name="DataCloudflareZeroTrustDnsLocation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_dns_location cloudflare_zero_trust_dns_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation(scope: Construct, id: string, config: DataCloudflareZeroTrustDnsLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig">DataCloudflareZeroTrustDnsLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig">DataCloudflareZeroTrustDnsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.resetLocationId">resetLocationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetLocationId` <a name="resetLocationId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.resetLocationId"></a>

```typescript
public resetLocationId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDnsLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDnsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDnsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.clientDefault">clientDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dnsDestinationIpsId">dnsDestinationIpsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId">dnsDestinationIpv6BlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dohSubdomain">dohSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ecsSupport">ecsSupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference">DataCloudflareZeroTrustDnsLocationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ipv4Destination">ipv4Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ipv4DestinationBackup">ipv4DestinationBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList">DataCloudflareZeroTrustDnsLocationNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.locationIdInput">locationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientDefault`<sup>Required</sup> <a name="clientDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.clientDefault"></a>

```typescript
public readonly clientDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsDestinationIpsId`<sup>Required</sup> <a name="dnsDestinationIpsId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dnsDestinationIpsId"></a>

```typescript
public readonly dnsDestinationIpsId: string;
```

- *Type:* string

---

##### `dnsDestinationIpv6BlockId`<sup>Required</sup> <a name="dnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId"></a>

```typescript
public readonly dnsDestinationIpv6BlockId: string;
```

- *Type:* string

---

##### `dohSubdomain`<sup>Required</sup> <a name="dohSubdomain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.dohSubdomain"></a>

```typescript
public readonly dohSubdomain: string;
```

- *Type:* string

---

##### `ecsSupport`<sup>Required</sup> <a name="ecsSupport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ecsSupport"></a>

```typescript
public readonly ecsSupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.endpoints"></a>

```typescript
public readonly endpoints: DataCloudflareZeroTrustDnsLocationEndpointsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference">DataCloudflareZeroTrustDnsLocationEndpointsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ipv4Destination`<sup>Required</sup> <a name="ipv4Destination" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ipv4Destination"></a>

```typescript
public readonly ipv4Destination: string;
```

- *Type:* string

---

##### `ipv4DestinationBackup`<sup>Required</sup> <a name="ipv4DestinationBackup" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.ipv4DestinationBackup"></a>

```typescript
public readonly ipv4DestinationBackup: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList">DataCloudflareZeroTrustDnsLocationNetworksList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `locationIdInput`<sup>Optional</sup> <a name="locationIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.locationIdInput"></a>

```typescript
public readonly locationIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDnsLocationConfig <a name="DataCloudflareZeroTrustDnsLocationConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationConfig: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_dns_location#account_id DataCloudflareZeroTrustDnsLocation#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.locationId">locationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_dns_location#location_id DataCloudflareZeroTrustDnsLocation#location_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_dns_location#account_id DataCloudflareZeroTrustDnsLocation#account_id}.

---

##### `locationId`<sup>Optional</sup> <a name="locationId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationConfig.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_dns_location#location_id DataCloudflareZeroTrustDnsLocation#location_id}.

---

### DataCloudflareZeroTrustDnsLocationEndpoints <a name="DataCloudflareZeroTrustDnsLocationEndpoints" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpoints.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpoints: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpoints = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsDoh <a name="DataCloudflareZeroTrustDnsLocationEndpointsDoh" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDoh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDoh.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsDoh: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDoh = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks <a name="DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsDohNetworks: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsDot <a name="DataCloudflareZeroTrustDnsLocationEndpointsDot" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDot.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsDot: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDot = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks <a name="DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsDotNetworks: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsIpv4 <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsIpv4: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4 = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsIpv6 <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsIpv6: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6 = { ... }
```


### DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks = { ... }
```


### DataCloudflareZeroTrustDnsLocationNetworks <a name="DataCloudflareZeroTrustDnsLocationNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationNetworks: dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList <a name="DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks">DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks">DataCloudflareZeroTrustDnsLocationEndpointsDohNetworks</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList">DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken">requireToken</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDoh">DataCloudflareZeroTrustDnsLocationEndpointsDoh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList">DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList</a>

---

##### `requireToken`<sup>Required</sup> <a name="requireToken" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken"></a>

```typescript
public readonly requireToken: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsDoh;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDoh">DataCloudflareZeroTrustDnsLocationEndpointsDoh</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList <a name="DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks">DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks">DataCloudflareZeroTrustDnsLocationEndpointsDotNetworks</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList">DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDot">DataCloudflareZeroTrustDnsLocationEndpointsDot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList">DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsDot;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDot">DataCloudflareZeroTrustDnsLocationEndpointsDot</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4">DataCloudflareZeroTrustDnsLocationEndpointsIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsIpv4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4">DataCloudflareZeroTrustDnsLocationEndpointsIpv4</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks">DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks">DataCloudflareZeroTrustDnsLocationEndpointsIpv6Networks</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList">DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6">DataCloudflareZeroTrustDnsLocationEndpointsIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList">DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpointsIpv6;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6">DataCloudflareZeroTrustDnsLocationEndpointsIpv6</a>

---


### DataCloudflareZeroTrustDnsLocationEndpointsOutputReference <a name="DataCloudflareZeroTrustDnsLocationEndpointsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.doh">doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference">DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.dot">dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference">DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference">DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference">DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpoints">DataCloudflareZeroTrustDnsLocationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `doh`<sup>Required</sup> <a name="doh" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.doh"></a>

```typescript
public readonly doh: DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference">DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference</a>

---

##### `dot`<sup>Required</sup> <a name="dot" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.dot"></a>

```typescript
public readonly dot: DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference">DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference</a>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference">DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference">DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationEndpoints;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationEndpoints">DataCloudflareZeroTrustDnsLocationEndpoints</a>

---


### DataCloudflareZeroTrustDnsLocationNetworksList <a name="DataCloudflareZeroTrustDnsLocationNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationNetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationNetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworks">DataCloudflareZeroTrustDnsLocationNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationNetworks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocation.DataCloudflareZeroTrustDnsLocationNetworks">DataCloudflareZeroTrustDnsLocationNetworks</a>

---




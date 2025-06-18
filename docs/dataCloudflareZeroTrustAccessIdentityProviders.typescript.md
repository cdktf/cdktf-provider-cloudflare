# `dataCloudflareZeroTrustAccessIdentityProviders` Submodule <a name="`dataCloudflareZeroTrustAccessIdentityProviders` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessIdentityProviders <a name="DataCloudflareZeroTrustAccessIdentityProviders" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessIdentityProvidersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig">DataCloudflareZeroTrustAccessIdentityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig">DataCloudflareZeroTrustAccessIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetScimEnabled">resetScimEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetScimEnabled` <a name="resetScimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetScimEnabled"></a>

```typescript
public resetScimEnabled(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList">DataCloudflareZeroTrustAccessIdentityProvidersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabledInput">scimEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabled">scimEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustAccessIdentityProvidersResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList">DataCloudflareZeroTrustAccessIdentityProvidersResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `scimEnabledInput`<sup>Optional</sup> <a name="scimEnabledInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabledInput"></a>

```typescript
public readonly scimEnabledInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `scimEnabled`<sup>Required</sup> <a name="scimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabled"></a>

```typescript
public readonly scimEnabled: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessIdentityProvidersConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessIdentityProvidersConfig: dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.scimEnabled">scimEnabled</a></code> | <code>string</code> | Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_access_identity_providers#account_id DataCloudflareZeroTrustAccessIdentityProviders#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_access_identity_providers#max_items DataCloudflareZeroTrustAccessIdentityProviders#max_items}

---

##### `scimEnabled`<sup>Optional</sup> <a name="scimEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.scimEnabled"></a>

```typescript
public readonly scimEnabled: string;
```

- *Type:* string

Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_access_identity_providers#scim_enabled DataCloudflareZeroTrustAccessIdentityProviders#scim_enabled}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_access_identity_providers#zone_id DataCloudflareZeroTrustAccessIdentityProviders#zone_id}

---

### DataCloudflareZeroTrustAccessIdentityProvidersResult <a name="DataCloudflareZeroTrustAccessIdentityProvidersResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessIdentityProvidersResult: dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult = { ... }
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessIdentityProvidersResultConfig: dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig = { ... }
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes: dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes = { ... }
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig: dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.appsDomain">appsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.attributes">attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authorizationServerId">authorizationServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAccount">centrifyAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAppId">centrifyAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.certsUrl">certsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.claims">claims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.conditionalAccessEnabled">conditionalAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailAttributeName">emailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailClaimName">emailClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.headerAttributes">headerAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.idpPublicCerts">idpPublicCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oktaAccount">oktaAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oneloginAccount">oneloginAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pingEnvId">pingEnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pkceEnabled">pkceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.signRequest">signRequest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.ssoTargetUrl">ssoTargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.supportGroups">supportGroups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appsDomain`<sup>Required</sup> <a name="appsDomain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.appsDomain"></a>

```typescript
public readonly appsDomain: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

---

##### `authorizationServerId`<sup>Required</sup> <a name="authorizationServerId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authorizationServerId"></a>

```typescript
public readonly authorizationServerId: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `centrifyAccount`<sup>Required</sup> <a name="centrifyAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAccount"></a>

```typescript
public readonly centrifyAccount: string;
```

- *Type:* string

---

##### `centrifyAppId`<sup>Required</sup> <a name="centrifyAppId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAppId"></a>

```typescript
public readonly centrifyAppId: string;
```

- *Type:* string

---

##### `certsUrl`<sup>Required</sup> <a name="certsUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.certsUrl"></a>

```typescript
public readonly certsUrl: string;
```

- *Type:* string

---

##### `claims`<sup>Required</sup> <a name="claims" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.claims"></a>

```typescript
public readonly claims: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `conditionalAccessEnabled`<sup>Required</sup> <a name="conditionalAccessEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.conditionalAccessEnabled"></a>

```typescript
public readonly conditionalAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `emailAttributeName`<sup>Required</sup> <a name="emailAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailAttributeName"></a>

```typescript
public readonly emailAttributeName: string;
```

- *Type:* string

---

##### `emailClaimName`<sup>Required</sup> <a name="emailClaimName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailClaimName"></a>

```typescript
public readonly emailClaimName: string;
```

- *Type:* string

---

##### `headerAttributes`<sup>Required</sup> <a name="headerAttributes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.headerAttributes"></a>

```typescript
public readonly headerAttributes: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList</a>

---

##### `idpPublicCerts`<sup>Required</sup> <a name="idpPublicCerts" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.idpPublicCerts"></a>

```typescript
public readonly idpPublicCerts: string[];
```

- *Type:* string[]

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `oktaAccount`<sup>Required</sup> <a name="oktaAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oktaAccount"></a>

```typescript
public readonly oktaAccount: string;
```

- *Type:* string

---

##### `oneloginAccount`<sup>Required</sup> <a name="oneloginAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oneloginAccount"></a>

```typescript
public readonly oneloginAccount: string;
```

- *Type:* string

---

##### `pingEnvId`<sup>Required</sup> <a name="pingEnvId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pingEnvId"></a>

```typescript
public readonly pingEnvId: string;
```

- *Type:* string

---

##### `pkceEnabled`<sup>Required</sup> <a name="pkceEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pkceEnabled"></a>

```typescript
public readonly pkceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `signRequest`<sup>Required</sup> <a name="signRequest" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.signRequest"></a>

```typescript
public readonly signRequest: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ssoTargetUrl`<sup>Required</sup> <a name="ssoTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.ssoTargetUrl"></a>

```typescript
public readonly ssoTargetUrl: string;
```

- *Type:* string

---

##### `supportGroups`<sup>Required</sup> <a name="supportGroups" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.supportGroups"></a>

```typescript
public readonly supportGroups: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultConfig</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultList <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult">DataCloudflareZeroTrustAccessIdentityProvidersResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.config"></a>

```typescript
public readonly config: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scimConfig`<sup>Required</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.scimConfig"></a>

```typescript
public readonly scimConfig: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustAccessIdentityProvidersResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult">DataCloudflareZeroTrustAccessIdentityProvidersResult</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessIdentityProviders } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.identityUpdateBehavior">identityUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.scimBaseUrl">scimBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.seatDeprovision">seatDeprovision</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.userDeprovision">userDeprovision</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `identityUpdateBehavior`<sup>Required</sup> <a name="identityUpdateBehavior" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.identityUpdateBehavior"></a>

```typescript
public readonly identityUpdateBehavior: string;
```

- *Type:* string

---

##### `scimBaseUrl`<sup>Required</sup> <a name="scimBaseUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.scimBaseUrl"></a>

```typescript
public readonly scimBaseUrl: string;
```

- *Type:* string

---

##### `seatDeprovision`<sup>Required</sup> <a name="seatDeprovision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.seatDeprovision"></a>

```typescript
public readonly seatDeprovision: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `userDeprovision`<sup>Required</sup> <a name="userDeprovision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.userDeprovision"></a>

```typescript
public readonly userDeprovision: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig</a>

---




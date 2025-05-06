# `dataCloudflareZeroTrustTunnelCloudflared` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflared` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflared <a name="DataCloudflareZeroTrustTunnelCloudflared" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig">DataCloudflareZeroTrustTunnelCloudflaredConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig">DataCloudflareZeroTrustTunnelCloudflaredConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetTunnelId">resetTunnelId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustTunnelCloudflaredFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetTunnelId` <a name="resetTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.resetTunnelId"></a>

```typescript
public resetTunnelId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflared to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustTunnelCloudflared that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflared to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountTag">accountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList">DataCloudflareZeroTrustTunnelCloudflaredConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsActiveAt">connsActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsInactiveAt">connsInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.remoteConfig">remoteConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunType">tunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountTag"></a>

```typescript
public readonly accountTag: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connections"></a>

```typescript
public readonly connections: DataCloudflareZeroTrustTunnelCloudflaredConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList">DataCloudflareZeroTrustTunnelCloudflaredConnectionsList</a>

---

##### `connsActiveAt`<sup>Required</sup> <a name="connsActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsActiveAt"></a>

```typescript
public readonly connsActiveAt: string;
```

- *Type:* string

---

##### `connsInactiveAt`<sup>Required</sup> <a name="connsInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.connsInactiveAt"></a>

```typescript
public readonly connsInactiveAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteConfig`<sup>Required</sup> <a name="remoteConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.remoteConfig"></a>

```typescript
public readonly remoteConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tunType`<sup>Required</sup> <a name="tunType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunType"></a>

```typescript
public readonly tunType: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustTunnelCloudflaredFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflared.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustTunnelCloudflaredConfig: dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#filter DataCloudflareZeroTrustTunnelCloudflared#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | UUID of the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#account_id DataCloudflareZeroTrustTunnelCloudflared#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustTunnelCloudflaredFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#filter DataCloudflareZeroTrustTunnelCloudflared#filter}.

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#tunnel_id DataCloudflareZeroTrustTunnelCloudflared#tunnel_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredConnections <a name="DataCloudflareZeroTrustTunnelCloudflaredConnections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustTunnelCloudflaredConnections: dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections = { ... }
```


### DataCloudflareZeroTrustTunnelCloudflaredFilter <a name="DataCloudflareZeroTrustTunnelCloudflaredFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustTunnelCloudflaredFilter: dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.excludePrefix">excludePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#exclude_prefix DataCloudflareZeroTrustTunnelCloudflared#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.existedAt">existedAt</a></code> | <code>string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.includePrefix">includePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#include_prefix DataCloudflareZeroTrustTunnelCloudflared#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.isDeleted">isDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.name">name</a></code> | <code>string</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.status">status</a></code> | <code>string</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.uuid">uuid</a></code> | <code>string</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasActiveAt">wasActiveAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_active_at DataCloudflareZeroTrustTunnelCloudflared#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasInactiveAt">wasInactiveAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_inactive_at DataCloudflareZeroTrustTunnelCloudflared#was_inactive_at}. |

---

##### `excludePrefix`<sup>Optional</sup> <a name="excludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.excludePrefix"></a>

```typescript
public readonly excludePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#exclude_prefix DataCloudflareZeroTrustTunnelCloudflared#exclude_prefix}.

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.existedAt"></a>

```typescript
public readonly existedAt: string;
```

- *Type:* string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#existed_at DataCloudflareZeroTrustTunnelCloudflared#existed_at}

---

##### `includePrefix`<sup>Optional</sup> <a name="includePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.includePrefix"></a>

```typescript
public readonly includePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#include_prefix DataCloudflareZeroTrustTunnelCloudflared#include_prefix}.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.isDeleted"></a>

```typescript
public readonly isDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#is_deleted DataCloudflareZeroTrustTunnelCloudflared#is_deleted}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#name DataCloudflareZeroTrustTunnelCloudflared#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#status DataCloudflareZeroTrustTunnelCloudflared#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#uuid DataCloudflareZeroTrustTunnelCloudflared#uuid}

---

##### `wasActiveAt`<sup>Optional</sup> <a name="wasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasActiveAt"></a>

```typescript
public readonly wasActiveAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_active_at DataCloudflareZeroTrustTunnelCloudflared#was_active_at}.

---

##### `wasInactiveAt`<sup>Optional</sup> <a name="wasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter.property.wasInactiveAt"></a>

```typescript
public readonly wasInactiveAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared#was_inactive_at DataCloudflareZeroTrustTunnelCloudflared#was_inactive_at}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredConnectionsList <a name="DataCloudflareZeroTrustTunnelCloudflaredConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.coloName">coloName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.isPendingReconnect">isPendingReconnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.openedAt">openedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.originIp">originIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections">DataCloudflareZeroTrustTunnelCloudflaredConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `coloName`<sup>Required</sup> <a name="coloName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.coloName"></a>

```typescript
public readonly coloName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPendingReconnect`<sup>Required</sup> <a name="isPendingReconnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.isPendingReconnect"></a>

```typescript
public readonly isPendingReconnect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.openedAt"></a>

```typescript
public readonly openedAt: string;
```

- *Type:* string

---

##### `originIp`<sup>Required</sup> <a name="originIp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.originIp"></a>

```typescript
public readonly originIp: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustTunnelCloudflaredConnections;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredConnections">DataCloudflareZeroTrustTunnelCloudflaredConnections</a>

---


### DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExcludePrefix">resetExcludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExistedAt">resetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIncludePrefix">resetIncludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasActiveAt">resetWasActiveAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasInactiveAt">resetWasInactiveAt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludePrefix` <a name="resetExcludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExcludePrefix"></a>

```typescript
public resetExcludePrefix(): void
```

##### `resetExistedAt` <a name="resetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetExistedAt"></a>

```typescript
public resetExistedAt(): void
```

##### `resetIncludePrefix` <a name="resetIncludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIncludePrefix"></a>

```typescript
public resetIncludePrefix(): void
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetIsDeleted"></a>

```typescript
public resetIsDeleted(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```

##### `resetWasActiveAt` <a name="resetWasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasActiveAt"></a>

```typescript
public resetWasActiveAt(): void
```

##### `resetWasInactiveAt` <a name="resetWasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.resetWasInactiveAt"></a>

```typescript
public resetWasInactiveAt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefixInput">excludePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAtInput">existedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefixInput">includePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeletedInput">isDeletedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAtInput">wasActiveAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAtInput">wasInactiveAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefix">excludePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAt">existedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefix">includePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeleted">isDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAt">wasActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAt">wasInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludePrefixInput`<sup>Optional</sup> <a name="excludePrefixInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefixInput"></a>

```typescript
public readonly excludePrefixInput: string;
```

- *Type:* string

---

##### `existedAtInput`<sup>Optional</sup> <a name="existedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAtInput"></a>

```typescript
public readonly existedAtInput: string;
```

- *Type:* string

---

##### `includePrefixInput`<sup>Optional</sup> <a name="includePrefixInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefixInput"></a>

```typescript
public readonly includePrefixInput: string;
```

- *Type:* string

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeletedInput"></a>

```typescript
public readonly isDeletedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `wasActiveAtInput`<sup>Optional</sup> <a name="wasActiveAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAtInput"></a>

```typescript
public readonly wasActiveAtInput: string;
```

- *Type:* string

---

##### `wasInactiveAtInput`<sup>Optional</sup> <a name="wasInactiveAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAtInput"></a>

```typescript
public readonly wasInactiveAtInput: string;
```

- *Type:* string

---

##### `excludePrefix`<sup>Required</sup> <a name="excludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.excludePrefix"></a>

```typescript
public readonly excludePrefix: string;
```

- *Type:* string

---

##### `existedAt`<sup>Required</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.existedAt"></a>

```typescript
public readonly existedAt: string;
```

- *Type:* string

---

##### `includePrefix`<sup>Required</sup> <a name="includePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.includePrefix"></a>

```typescript
public readonly includePrefix: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `wasActiveAt`<sup>Required</sup> <a name="wasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasActiveAt"></a>

```typescript
public readonly wasActiveAt: string;
```

- *Type:* string

---

##### `wasInactiveAt`<sup>Required</sup> <a name="wasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.wasInactiveAt"></a>

```typescript
public readonly wasInactiveAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustTunnelCloudflaredFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflared.DataCloudflareZeroTrustTunnelCloudflaredFilter">DataCloudflareZeroTrustTunnelCloudflaredFilter</a>

---




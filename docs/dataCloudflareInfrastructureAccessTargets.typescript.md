# `dataCloudflareInfrastructureAccessTargets` Submodule <a name="`dataCloudflareInfrastructureAccessTargets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareInfrastructureAccessTargets <a name="DataCloudflareInfrastructureAccessTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets cloudflare_infrastructure_access_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

new dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets(scope: Construct, id: string, config: DataCloudflareInfrastructureAccessTargetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig">DataCloudflareInfrastructureAccessTargetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig">DataCloudflareInfrastructureAccessTargetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains">resetHostnameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter">resetModifiedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter"></a>

```typescript
public resetCreatedAfter(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetHostnameContains` <a name="resetHostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains"></a>

```typescript
public resetHostnameContains(): void
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4"></a>

```typescript
public resetIpv4(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetModifiedAfter` <a name="resetModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter"></a>

```typescript
public resetModifiedAfter(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareInfrastructureAccessTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareInfrastructureAccessTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareInfrastructureAccessTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput">createdAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput">hostnameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input">ipv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input">ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput">modifiedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter">createdAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains">hostnameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4">ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter">modifiedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets"></a>

```typescript
public readonly targets: DataCloudflareInfrastructureAccessTargetsTargetsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput"></a>

```typescript
public readonly createdAfterInput: string;
```

- *Type:* string

---

##### `hostnameContainsInput`<sup>Optional</sup> <a name="hostnameContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput"></a>

```typescript
public readonly hostnameContainsInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: string;
```

- *Type:* string

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: string;
```

- *Type:* string

---

##### `modifiedAfterInput`<sup>Optional</sup> <a name="modifiedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput"></a>

```typescript
public readonly modifiedAfterInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `hostnameContains`<sup>Required</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains"></a>

```typescript
public readonly hostnameContains: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `modifiedAfter`<sup>Required</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter"></a>

```typescript
public readonly modifiedAfter: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareInfrastructureAccessTargetsConfig <a name="DataCloudflareInfrastructureAccessTargetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

const dataCloudflareInfrastructureAccessTargetsConfig: dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter">createdAfter</a></code> | <code>string</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname">hostname</a></code> | <code>string</code> | The name of the app type. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains">hostnameContains</a></code> | <code>string</code> | The name of the app type. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4">ipv4</a></code> | <code>string</code> | The name of the app type. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6">ipv6</a></code> | <code>string</code> | The name of the app type. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter">modifiedAfter</a></code> | <code>string</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The name of the app type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#account_id DataCloudflareInfrastructureAccessTargets#account_id}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#created_after DataCloudflareInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The name of the app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#hostname DataCloudflareInfrastructureAccessTargets#hostname}

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains"></a>

```typescript
public readonly hostnameContains: string;
```

- *Type:* string

The name of the app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#hostname_contains DataCloudflareInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

The name of the app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

The name of the app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

##### `modifiedAfter`<sup>Optional</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter"></a>

```typescript
public readonly modifiedAfter: string;
```

- *Type:* string

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#modified_after DataCloudflareInfrastructureAccessTargets#modified_after}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The name of the app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargets <a name="DataCloudflareInfrastructureAccessTargetsTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

const dataCloudflareInfrastructureAccessTargetsTargets: dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip"></a>

```typescript
public readonly ip: DataCloudflareInfrastructureAccessTargetsTargetsIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ip DataCloudflareInfrastructureAccessTargets#ip}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIp <a name="DataCloudflareInfrastructureAccessTargetsTargetsIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

const dataCloudflareInfrastructureAccessTargetsTargetsIp: dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4"></a>

```typescript
public readonly ipv4: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6"></a>

```typescript
public readonly ipv6: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

const dataCloudflareInfrastructureAccessTargetsTargetsIpIpv4: dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr">ipAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

const dataCloudflareInfrastructureAccessTargetsTargetsIpIpv6: dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr">ipAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

new dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput"></a>

```typescript
public readonly ipAddrInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

new dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput"></a>

```typescript
public readonly ipAddrInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

new dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4"></a>

```typescript
public putIpv4(value: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6"></a>

```typescript
public putIpv6(value: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4"></a>

```typescript
public resetIpv4(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: IResolvable | DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: IResolvable | DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareInfrastructureAccessTargetsTargetsIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsList <a name="DataCloudflareInfrastructureAccessTargetsTargetsList" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

new dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get"></a>

```typescript
public get(index: number): DataCloudflareInfrastructureAccessTargetsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareInfrastructureAccessTargetsTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>[]

---


### DataCloudflareInfrastructureAccessTargetsTargetsOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareInfrastructureAccessTargets } from '@cdktf/provider-cloudflare'

new dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp">putIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp"></a>

```typescript
public putIp(value: DataCloudflareInfrastructureAccessTargetsTargetsIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput">ipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip"></a>

```typescript
public readonly ip: DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: DataCloudflareInfrastructureAccessTargetsTargetsIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareInfrastructureAccessTargetsTargets;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>

---




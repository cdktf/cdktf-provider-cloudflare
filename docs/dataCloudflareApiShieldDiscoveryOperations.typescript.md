# `dataCloudflareApiShieldDiscoveryOperations` Submodule <a name="`dataCloudflareApiShieldDiscoveryOperations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldDiscoveryOperations <a name="DataCloudflareApiShieldDiscoveryOperations" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

new dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations(scope: Construct, id: string, config: DataCloudflareApiShieldDiscoveryOperationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig">DataCloudflareApiShieldDiscoveryOperationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig">DataCloudflareApiShieldDiscoveryOperationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff">resetDiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDiff` <a name="resetDiff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff"></a>

```typescript
public resetDiff(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput">diffInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput">hostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput">methodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff">diff</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method">method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result"></a>

```typescript
public readonly result: DataCloudflareApiShieldDiscoveryOperationsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a>

---

##### `diffInput`<sup>Optional</sup> <a name="diffInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput"></a>

```typescript
public readonly diffInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput"></a>

```typescript
public readonly hostInput: string[];
```

- *Type:* string[]

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput"></a>

```typescript
public readonly methodInput: string[];
```

- *Type:* string[]

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `diff`<sup>Required</sup> <a name="diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff"></a>

```typescript
public readonly diff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method"></a>

```typescript
public readonly method: string[];
```

- *Type:* string[]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldDiscoveryOperationsConfig <a name="DataCloudflareApiShieldDiscoveryOperationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

const dataCloudflareApiShieldDiscoveryOperationsConfig: dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff">diff</a></code> | <code>boolean \| cdktf.IResolvable</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction">direction</a></code> | <code>string</code> | Direction to order results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host">host</a></code> | <code>string[]</code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method">method</a></code> | <code>string[]</code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order">order</a></code> | <code>string</code> | Field to order by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin">origin</a></code> | <code>string</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state">state</a></code> | <code>string</code> | Filter results to only include discovery results in a particular state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

##### `diff`<sup>Optional</sup> <a name="diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff"></a>

```typescript
public readonly diff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method"></a>

```typescript
public readonly method: string[];
```

- *Type:* string[]

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Filter results to only include discovery results in a particular state.

States are as follows
  * `review` - Discovered operations that are not saved into API Shield Endpoint Management
  * `saved` - Discovered operations that are already saved into API Shield Endpoint Management
  * `ignored` - Discovered operations that have been marked as ignored


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

### DataCloudflareApiShieldDiscoveryOperationsResult <a name="DataCloudflareApiShieldDiscoveryOperationsResult" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

const dataCloudflareApiShieldDiscoveryOperationsResult: dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult = { ... }
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeatures <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeatures" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

const dataCloudflareApiShieldDiscoveryOperationsResultFeatures: dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures = { ... }
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

const dataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats: dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

new dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats">trafficStats</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trafficStats`<sup>Required</sup> <a name="trafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats"></a>

```typescript
public readonly trafficStats: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareApiShieldDiscoveryOperationsResultFeatures;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

new dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests">requests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultList <a name="DataCloudflareApiShieldDiscoveryOperationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

new dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareApiShieldDiscoveryOperationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareApiShieldDiscoveryOperationsResultOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareApiShieldDiscoveryOperations } from '@cdktf/provider-cloudflare'

new dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features">features</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin">origin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features"></a>

```typescript
public readonly features: DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin"></a>

```typescript
public readonly origin: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareApiShieldDiscoveryOperationsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a>

---




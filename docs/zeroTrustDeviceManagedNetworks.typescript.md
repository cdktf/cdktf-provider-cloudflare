# `zeroTrustDeviceManagedNetworks` Submodule <a name="`zeroTrustDeviceManagedNetworks` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceManagedNetworks <a name="ZeroTrustDeviceManagedNetworks" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks(scope: Construct, id: string, config: ZeroTrustDeviceManagedNetworksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig">ZeroTrustDeviceManagedNetworksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig">ZeroTrustDeviceManagedNetworksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig">putConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig"></a>

```typescript
public putConfig(value: ZeroTrustDeviceManagedNetworksConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceManagedNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceManagedNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceManagedNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference">ZeroTrustDeviceManagedNetworksConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.config"></a>

```typescript
public readonly config: ZeroTrustDeviceManagedNetworksConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference">ZeroTrustDeviceManagedNetworksConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ZeroTrustDeviceManagedNetworksConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceManagedNetworksConfig <a name="ZeroTrustDeviceManagedNetworksConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.Initializer"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceManagedNetworksConfig: zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a></code> | The configuration object containing information for the WARP client to detect the managed network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.name">name</a></code> | <code>string</code> | The name of the device managed network. This name must be unique. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.type">type</a></code> | <code>string</code> | The type of device managed network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.config"></a>

```typescript
public readonly config: ZeroTrustDeviceManagedNetworksConfigA;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

The configuration object containing information for the WARP client to detect the managed network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#config ZeroTrustDeviceManagedNetworks#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the device managed network. This name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#name ZeroTrustDeviceManagedNetworks#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of device managed network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#type ZeroTrustDeviceManagedNetworks#type}

---

### ZeroTrustDeviceManagedNetworksConfigA <a name="ZeroTrustDeviceManagedNetworksConfigA" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.Initializer"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceManagedNetworksConfigA: zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.tlsSockaddr">tlsSockaddr</a></code> | <code>string</code> | A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.sha256">sha256</a></code> | <code>string</code> | The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. |

---

##### `tlsSockaddr`<sup>Required</sup> <a name="tlsSockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.tlsSockaddr"></a>

```typescript
public readonly tlsSockaddr: string;
```

- *Type:* string

A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#tls_sockaddr ZeroTrustDeviceManagedNetworks#tls_sockaddr}

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr.

If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_device_managed_networks#sha256 ZeroTrustDeviceManagedNetworks#sha256}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceManagedNetworksConfigAOutputReference <a name="ZeroTrustDeviceManagedNetworksConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer"></a>

```typescript
import { zeroTrustDeviceManagedNetworks } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resetSha256">resetSha256</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha256` <a name="resetSha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resetSha256"></a>

```typescript
public resetSha256(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256Input">sha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput">tlsSockaddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr">tlsSockaddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256Input"></a>

```typescript
public readonly sha256Input: string;
```

- *Type:* string

---

##### `tlsSockaddrInput`<sup>Optional</sup> <a name="tlsSockaddrInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput"></a>

```typescript
public readonly tlsSockaddrInput: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `tlsSockaddr`<sup>Required</sup> <a name="tlsSockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr"></a>

```typescript
public readonly tlsSockaddr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceManagedNetworksConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

---




# `zeroTrustTunnelWarpConnector` Submodule <a name="`zeroTrustTunnelWarpConnector` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnector <a name="ZeroTrustTunnelWarpConnector" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

new zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector(scope: Construct, id: string, config: ZeroTrustTunnelWarpConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig">ZeroTrustTunnelWarpConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig">ZeroTrustTunnelWarpConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret">resetTunnelSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTunnelSecret` <a name="resetTunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret"></a>

```typescript
public resetTunnelSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustTunnelWarpConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustTunnelWarpConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag">accountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt">connsActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt">connsInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.remoteConfig">remoteConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType">tunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput">tunnelSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret">tunnelSecret</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag"></a>

```typescript
public readonly accountTag: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections"></a>

```typescript
public readonly connections: ZeroTrustTunnelWarpConnectorConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a>

---

##### `connsActiveAt`<sup>Required</sup> <a name="connsActiveAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt"></a>

```typescript
public readonly connsActiveAt: string;
```

- *Type:* string

---

##### `connsInactiveAt`<sup>Required</sup> <a name="connsInactiveAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt"></a>

```typescript
public readonly connsInactiveAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `remoteConfig`<sup>Required</sup> <a name="remoteConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.remoteConfig"></a>

```typescript
public readonly remoteConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tunType`<sup>Required</sup> <a name="tunType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType"></a>

```typescript
public readonly tunType: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tunnelSecretInput`<sup>Optional</sup> <a name="tunnelSecretInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput"></a>

```typescript
public readonly tunnelSecretInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tunnelSecret`<sup>Required</sup> <a name="tunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret"></a>

```typescript
public readonly tunnelSecret: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfig <a name="ZeroTrustTunnelWarpConnectorConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.Initializer"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

const zeroTrustTunnelWarpConnectorConfig: zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name">name</a></code> | <code>string</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret">tunnelSecret</a></code> | <code>string</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#account_id ZeroTrustTunnelWarpConnector#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#name ZeroTrustTunnelWarpConnector#name}

---

##### `tunnelSecret`<sup>Optional</sup> <a name="tunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret"></a>

```typescript
public readonly tunnelSecret: string;
```

- *Type:* string

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#tunnel_secret ZeroTrustTunnelWarpConnector#tunnel_secret}

---

### ZeroTrustTunnelWarpConnectorConnections <a name="ZeroTrustTunnelWarpConnectorConnections" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections.Initializer"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

const zeroTrustTunnelWarpConnectorConnections: zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConnectionsList <a name="ZeroTrustTunnelWarpConnectorConnectionsList" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

new zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get"></a>

```typescript
public get(index: number): ZeroTrustTunnelWarpConnectorConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZeroTrustTunnelWarpConnectorConnectionsOutputReference <a name="ZeroTrustTunnelWarpConnectorConnectionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer"></a>

```typescript
import { zeroTrustTunnelWarpConnector } from '@cdktf/provider-cloudflare'

new zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName">coloName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect">isPendingReconnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt">openedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp">originIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `coloName`<sup>Required</sup> <a name="coloName" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName"></a>

```typescript
public readonly coloName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPendingReconnect`<sup>Required</sup> <a name="isPendingReconnect" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect"></a>

```typescript
public readonly isPendingReconnect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt"></a>

```typescript
public readonly openedAt: string;
```

- *Type:* string

---

##### `originIp`<sup>Required</sup> <a name="originIp" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp"></a>

```typescript
public readonly originIp: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustTunnelWarpConnectorConnections;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a>

---




# `zeroTrustTunnelCloudflaredRoute` Submodule <a name="`zeroTrustTunnelCloudflaredRoute` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelCloudflaredRoute <a name="ZeroTrustTunnelCloudflaredRoute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer"></a>

```typescript
import { zeroTrustTunnelCloudflaredRoute } from '@cdktf/provider-cloudflare'

new zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute(scope: Construct, id: string, config: ZeroTrustTunnelCloudflaredRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig">ZeroTrustTunnelCloudflaredRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig">ZeroTrustTunnelCloudflaredRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct"></a>

```typescript
import { zeroTrustTunnelCloudflaredRoute } from '@cdktf/provider-cloudflare'

zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement"></a>

```typescript
import { zeroTrustTunnelCloudflaredRoute } from '@cdktf/provider-cloudflare'

zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource"></a>

```typescript
import { zeroTrustTunnelCloudflaredRoute } from '@cdktf/provider-cloudflare'

zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport"></a>

```typescript
import { zeroTrustTunnelCloudflaredRoute } from '@cdktf/provider-cloudflare'

zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustTunnelCloudflaredRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustTunnelCloudflaredRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelCloudflaredRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelCloudflaredRouteConfig <a name="ZeroTrustTunnelCloudflaredRouteConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.Initializer"></a>

```typescript
import { zeroTrustTunnelCloudflaredRoute } from '@cdktf/provider-cloudflare'

const zeroTrustTunnelCloudflaredRouteConfig: zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.network">network</a></code> | <code>string</code> | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.comment">comment</a></code> | <code>string</code> | Optional remark describing the route. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | UUID of the virtual network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route#account_id ZeroTrustTunnelCloudflaredRoute#account_id}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The private IPv4 or IPv6 range connected by the route, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route#network ZeroTrustTunnelCloudflaredRoute#network}

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route#tunnel_id ZeroTrustTunnelCloudflaredRoute#tunnel_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Optional remark describing the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route#comment ZeroTrustTunnelCloudflaredRoute#comment}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_tunnel_cloudflared_route#virtual_network_id ZeroTrustTunnelCloudflaredRoute#virtual_network_id}

---




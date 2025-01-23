# `zeroTrustInfrastructureAccessTarget` Submodule <a name="`zeroTrustInfrastructureAccessTarget` Submodule" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustInfrastructureAccessTarget <a name="ZeroTrustInfrastructureAccessTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target cloudflare_zero_trust_infrastructure_access_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget(scope: Construct, id: string, config: ZeroTrustInfrastructureAccessTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig">ZeroTrustInfrastructureAccessTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig">ZeroTrustInfrastructureAccessTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.putIp">putIp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.putIp"></a>

```typescript
public putIp(value: ZeroTrustInfrastructureAccessTargetIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustInfrastructureAccessTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustInfrastructureAccessTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustInfrastructureAccessTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustInfrastructureAccessTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustInfrastructureAccessTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference">ZeroTrustInfrastructureAccessTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ipInput">ipInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ip"></a>

```typescript
public readonly ip: ZeroTrustInfrastructureAccessTargetIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference">ZeroTrustInfrastructureAccessTargetIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ipInput"></a>

```typescript
public readonly ipInput: IResolvable | ZeroTrustInfrastructureAccessTargetIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustInfrastructureAccessTargetConfig <a name="ZeroTrustInfrastructureAccessTargetConfig" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const zeroTrustInfrastructureAccessTargetConfig: zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.hostname">hostname</a></code> | <code>string</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#account_id ZeroTrustInfrastructureAccessTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

A non-unique field that refers to a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#hostname ZeroTrustInfrastructureAccessTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.ip"></a>

```typescript
public readonly ip: ZeroTrustInfrastructureAccessTargetIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#ip ZeroTrustInfrastructureAccessTarget#ip}

---

### ZeroTrustInfrastructureAccessTargetIp <a name="ZeroTrustInfrastructureAccessTargetIp" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const zeroTrustInfrastructureAccessTargetIp: zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv4"></a>

```typescript
public readonly ipv4: ZeroTrustInfrastructureAccessTargetIpIpv4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#ipv4 ZeroTrustInfrastructureAccessTarget#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv6"></a>

```typescript
public readonly ipv6: ZeroTrustInfrastructureAccessTargetIpIpv6;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#ipv6 ZeroTrustInfrastructureAccessTarget#ipv6}

---

### ZeroTrustInfrastructureAccessTargetIpIpv4 <a name="ZeroTrustInfrastructureAccessTargetIpIpv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const zeroTrustInfrastructureAccessTargetIpIpv4: zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.ipAddr">ipAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#ip_addr ZeroTrustInfrastructureAccessTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#virtual_network_id ZeroTrustInfrastructureAccessTarget#virtual_network_id}

---

### ZeroTrustInfrastructureAccessTargetIpIpv6 <a name="ZeroTrustInfrastructureAccessTargetIpIpv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const zeroTrustInfrastructureAccessTargetIpIpv6: zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.ipAddr">ipAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#ip_addr ZeroTrustInfrastructureAccessTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_infrastructure_access_target#virtual_network_id ZeroTrustInfrastructureAccessTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference <a name="ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```typescript
public readonly ipAddrInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustInfrastructureAccessTargetIpIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a>

---


### ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference <a name="ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```typescript
public readonly ipAddrInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustInfrastructureAccessTargetIpIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a>

---


### ZeroTrustInfrastructureAccessTargetIpOutputReference <a name="ZeroTrustInfrastructureAccessTargetIpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer"></a>

```typescript
import { zeroTrustInfrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv4"></a>

```typescript
public putIpv4(value: ZeroTrustInfrastructureAccessTargetIpIpv4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv6"></a>

```typescript
public putIpv6(value: ZeroTrustInfrastructureAccessTargetIpIpv6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv4"></a>

```typescript
public resetIpv4(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: IResolvable | ZeroTrustInfrastructureAccessTargetIpIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: IResolvable | ZeroTrustInfrastructureAccessTargetIpIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustInfrastructureAccessTargetIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a>

---




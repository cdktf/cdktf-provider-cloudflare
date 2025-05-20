# `magicWanStaticRoute` Submodule <a name="`magicWanStaticRoute` Submodule" id="@cdktf/provider-cloudflare.magicWanStaticRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanStaticRoute <a name="MagicWanStaticRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

new magicWanStaticRoute.MagicWanStaticRoute(scope: Construct, id: string, config: MagicWanStaticRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig">MagicWanStaticRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig">MagicWanStaticRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute"></a>

```typescript
public putRoute(value: MagicWanStaticRouteRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope"></a>

```typescript
public putScope(value: MagicWanStaticRouteScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

magicWanStaticRoute.MagicWanStaticRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicWanStaticRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicWanStaticRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanStaticRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modified">modified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedRoute">modifiedRoute</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference">MagicWanStaticRouteModifiedRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.route">route</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference">MagicWanStaticRouteRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference">MagicWanStaticRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthopInput">nexthopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scopeInput">scopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthop">nexthop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modified"></a>

```typescript
public readonly modified: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `modifiedRoute`<sup>Required</sup> <a name="modifiedRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedRoute"></a>

```typescript
public readonly modifiedRoute: MagicWanStaticRouteModifiedRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference">MagicWanStaticRouteModifiedRouteOutputReference</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.route"></a>

```typescript
public readonly route: MagicWanStaticRouteRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference">MagicWanStaticRouteRouteOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scope"></a>

```typescript
public readonly scope: MagicWanStaticRouteScopeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference">MagicWanStaticRouteScopeOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nexthopInput`<sup>Optional</sup> <a name="nexthopInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthopInput"></a>

```typescript
public readonly nexthopInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | MagicWanStaticRouteRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | MagicWanStaticRouteScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanStaticRouteConfig <a name="MagicWanStaticRouteConfig" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

const magicWanStaticRouteConfig: magicWanStaticRoute.MagicWanStaticRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.nexthop">nexthop</a></code> | <code>string</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.prefix">prefix</a></code> | <code>string</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.priority">priority</a></code> | <code>number</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.description">description</a></code> | <code>string</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.route">route</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.weight">weight</a></code> | <code>number</code> | Optional weight of the ECMP scope - if provided. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.route"></a>

```typescript
public readonly route: MagicWanStaticRouteRoute;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.scope"></a>

```typescript
public readonly scope: MagicWanStaticRouteScope;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

### MagicWanStaticRouteModifiedRoute <a name="MagicWanStaticRouteModifiedRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

const magicWanStaticRouteModifiedRoute: magicWanStaticRoute.MagicWanStaticRouteModifiedRoute = { ... }
```


### MagicWanStaticRouteModifiedRouteScope <a name="MagicWanStaticRouteModifiedRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

const magicWanStaticRouteModifiedRouteScope: magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope = { ... }
```


### MagicWanStaticRouteRoute <a name="MagicWanStaticRouteRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

const magicWanStaticRouteRoute: magicWanStaticRoute.MagicWanStaticRouteRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.description">description</a></code> | <code>string</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.nexthop">nexthop</a></code> | <code>string</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.prefix">prefix</a></code> | <code>string</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.priority">priority</a></code> | <code>number</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.weight">weight</a></code> | <code>number</code> | Optional weight of the ECMP scope - if provided. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `nexthop`<sup>Optional</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.scope"></a>

```typescript
public readonly scope: MagicWanStaticRouteRouteScope;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

### MagicWanStaticRouteRouteScope <a name="MagicWanStaticRouteRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

const magicWanStaticRouteRouteScope: magicWanStaticRoute.MagicWanStaticRouteRouteScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloNames">coloNames</a></code> | <code>string[]</code> | List of colo names for the ECMP scope. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloRegions">coloRegions</a></code> | <code>string[]</code> | List of colo regions for the ECMP scope. |

---

##### `coloNames`<sup>Optional</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloNames"></a>

```typescript
public readonly coloNames: string[];
```

- *Type:* string[]

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

##### `coloRegions`<sup>Optional</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloRegions"></a>

```typescript
public readonly coloRegions: string[];
```

- *Type:* string[]

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

### MagicWanStaticRouteScope <a name="MagicWanStaticRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

const magicWanStaticRouteScope: magicWanStaticRoute.MagicWanStaticRouteScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloNames">coloNames</a></code> | <code>string[]</code> | List of colo names for the ECMP scope. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloRegions">coloRegions</a></code> | <code>string[]</code> | List of colo regions for the ECMP scope. |

---

##### `coloNames`<sup>Optional</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloNames"></a>

```typescript
public readonly coloNames: string[];
```

- *Type:* string[]

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

##### `coloRegions`<sup>Optional</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloRegions"></a>

```typescript
public readonly coloRegions: string[];
```

- *Type:* string[]

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicWanStaticRouteModifiedRouteOutputReference <a name="MagicWanStaticRouteModifiedRouteOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

new magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.nexthop">nexthop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference">MagicWanStaticRouteModifiedRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute">MagicWanStaticRouteModifiedRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.scope"></a>

```typescript
public readonly scope: MagicWanStaticRouteModifiedRouteScopeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference">MagicWanStaticRouteModifiedRouteScopeOutputReference</a>

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MagicWanStaticRouteModifiedRoute;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute">MagicWanStaticRouteModifiedRoute</a>

---


### MagicWanStaticRouteModifiedRouteScopeOutputReference <a name="MagicWanStaticRouteModifiedRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

new magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloNames">coloNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloRegions">coloRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope">MagicWanStaticRouteModifiedRouteScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coloNames`<sup>Required</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloNames"></a>

```typescript
public readonly coloNames: string[];
```

- *Type:* string[]

---

##### `coloRegions`<sup>Required</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloRegions"></a>

```typescript
public readonly coloRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MagicWanStaticRouteModifiedRouteScope;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope">MagicWanStaticRouteModifiedRouteScope</a>

---


### MagicWanStaticRouteRouteOutputReference <a name="MagicWanStaticRouteRouteOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

new magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetNexthop">resetNexthop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScope` <a name="putScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope"></a>

```typescript
public putScope(value: MagicWanStaticRouteRouteScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNexthop` <a name="resetNexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetNexthop"></a>

```typescript
public resetNexthop(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference">MagicWanStaticRouteRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthopInput">nexthopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scopeInput">scopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthop">nexthop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scope"></a>

```typescript
public readonly scope: MagicWanStaticRouteRouteScopeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference">MagicWanStaticRouteRouteScopeOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nexthopInput`<sup>Optional</sup> <a name="nexthopInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthopInput"></a>

```typescript
public readonly nexthopInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | MagicWanStaticRouteRouteScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanStaticRouteRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>

---


### MagicWanStaticRouteRouteScopeOutputReference <a name="MagicWanStaticRouteRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

new magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoNames">resetColoNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoRegions">resetColoRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColoNames` <a name="resetColoNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoNames"></a>

```typescript
public resetColoNames(): void
```

##### `resetColoRegions` <a name="resetColoRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoRegions"></a>

```typescript
public resetColoRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNamesInput">coloNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegionsInput">coloRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNames">coloNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegions">coloRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coloNamesInput`<sup>Optional</sup> <a name="coloNamesInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNamesInput"></a>

```typescript
public readonly coloNamesInput: string[];
```

- *Type:* string[]

---

##### `coloRegionsInput`<sup>Optional</sup> <a name="coloRegionsInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegionsInput"></a>

```typescript
public readonly coloRegionsInput: string[];
```

- *Type:* string[]

---

##### `coloNames`<sup>Required</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNames"></a>

```typescript
public readonly coloNames: string[];
```

- *Type:* string[]

---

##### `coloRegions`<sup>Required</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegions"></a>

```typescript
public readonly coloRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanStaticRouteRouteScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>

---


### MagicWanStaticRouteScopeOutputReference <a name="MagicWanStaticRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer"></a>

```typescript
import { magicWanStaticRoute } from '@cdktf/provider-cloudflare'

new magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoNames">resetColoNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoRegions">resetColoRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColoNames` <a name="resetColoNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoNames"></a>

```typescript
public resetColoNames(): void
```

##### `resetColoRegions` <a name="resetColoRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoRegions"></a>

```typescript
public resetColoRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNamesInput">coloNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegionsInput">coloRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNames">coloNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegions">coloRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coloNamesInput`<sup>Optional</sup> <a name="coloNamesInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNamesInput"></a>

```typescript
public readonly coloNamesInput: string[];
```

- *Type:* string[]

---

##### `coloRegionsInput`<sup>Optional</sup> <a name="coloRegionsInput" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegionsInput"></a>

```typescript
public readonly coloRegionsInput: string[];
```

- *Type:* string[]

---

##### `coloNames`<sup>Required</sup> <a name="coloNames" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNames"></a>

```typescript
public readonly coloNames: string[];
```

- *Type:* string[]

---

##### `coloRegions`<sup>Required</sup> <a name="coloRegions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegions"></a>

```typescript
public readonly coloRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanStaticRouteScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

---




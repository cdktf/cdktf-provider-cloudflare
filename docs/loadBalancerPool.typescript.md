# `loadBalancerPool` Submodule <a name="`loadBalancerPool` Submodule" id="@cdktf/provider-cloudflare.loadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPool <a name="LoadBalancerPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPool(scope: Construct, id: string, config: LoadBalancerPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig">LoadBalancerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig">LoadBalancerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding">putLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter">putNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins">putOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering">putOriginSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions">resetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding">resetLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude">resetLongitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins">resetMinimumOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationFilter">resetNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering">resetOriginSteering</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoadShedding` <a name="putLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding"></a>

```typescript
public putLoadShedding(value: LoadBalancerPoolLoadShedding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---

##### `putNotificationFilter` <a name="putNotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter"></a>

```typescript
public putNotificationFilter(value: LoadBalancerPoolNotificationFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---

##### `putOrigins` <a name="putOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins"></a>

```typescript
public putOrigins(value: IResolvable | LoadBalancerPoolOrigins[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]

---

##### `putOriginSteering` <a name="putOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering"></a>

```typescript
public putOriginSteering(value: LoadBalancerPoolOriginSteering): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---

##### `resetCheckRegions` <a name="resetCheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions"></a>

```typescript
public resetCheckRegions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLatitude` <a name="resetLatitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude"></a>

```typescript
public resetLatitude(): void
```

##### `resetLoadShedding` <a name="resetLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding"></a>

```typescript
public resetLoadShedding(): void
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude"></a>

```typescript
public resetLongitude(): void
```

##### `resetMinimumOrigins` <a name="resetMinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins"></a>

```typescript
public resetMinimumOrigins(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail"></a>

```typescript
public resetNotificationEmail(): void
```

##### `resetNotificationFilter` <a name="resetNotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationFilter"></a>

```typescript
public resetNotificationFilter(): void
```

##### `resetOriginSteering` <a name="resetOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering"></a>

```typescript
public resetOriginSteering(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

loadBalancerPool.LoadBalancerPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

loadBalancerPool.LoadBalancerPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

loadBalancerPool.LoadBalancerPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

loadBalancerPool.LoadBalancerPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.disabledAt">disabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding">loadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference">LoadBalancerPoolLoadSheddingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilter">notificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference">LoadBalancerPoolNotificationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins">origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering">originSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference">LoadBalancerPoolOriginSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput">checkRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput">latitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput">loadSheddingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput">longitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput">minimumOriginsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput">monitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput">notificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilterInput">notificationFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput">originsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput">originSteeringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions">checkRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude">latitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude">longitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins">minimumOrigins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor">monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.disabledAt"></a>

```typescript
public readonly disabledAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadShedding`<sup>Required</sup> <a name="loadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding"></a>

```typescript
public readonly loadShedding: LoadBalancerPoolLoadSheddingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference">LoadBalancerPoolLoadSheddingOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `notificationFilter`<sup>Required</sup> <a name="notificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilter"></a>

```typescript
public readonly notificationFilter: LoadBalancerPoolNotificationFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference">LoadBalancerPoolNotificationFilterOutputReference</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins"></a>

```typescript
public readonly origins: LoadBalancerPoolOriginsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a>

---

##### `originSteering`<sup>Required</sup> <a name="originSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering"></a>

```typescript
public readonly originSteering: LoadBalancerPoolOriginSteeringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference">LoadBalancerPoolOriginSteeringOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `checkRegionsInput`<sup>Optional</sup> <a name="checkRegionsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput"></a>

```typescript
public readonly checkRegionsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput"></a>

```typescript
public readonly latitudeInput: number;
```

- *Type:* number

---

##### `loadSheddingInput`<sup>Optional</sup> <a name="loadSheddingInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput"></a>

```typescript
public readonly loadSheddingInput: IResolvable | LoadBalancerPoolLoadShedding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput"></a>

```typescript
public readonly longitudeInput: number;
```

- *Type:* number

---

##### `minimumOriginsInput`<sup>Optional</sup> <a name="minimumOriginsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput"></a>

```typescript
public readonly minimumOriginsInput: number;
```

- *Type:* number

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput"></a>

```typescript
public readonly monitorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput"></a>

```typescript
public readonly notificationEmailInput: string;
```

- *Type:* string

---

##### `notificationFilterInput`<sup>Optional</sup> <a name="notificationFilterInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilterInput"></a>

```typescript
public readonly notificationFilterInput: IResolvable | LoadBalancerPoolNotificationFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput"></a>

```typescript
public readonly originsInput: IResolvable | LoadBalancerPoolOrigins[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]

---

##### `originSteeringInput`<sup>Optional</sup> <a name="originSteeringInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput"></a>

```typescript
public readonly originSteeringInput: IResolvable | LoadBalancerPoolOriginSteering;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `checkRegions`<sup>Required</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions"></a>

```typescript
public readonly checkRegions: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

---

##### `minimumOrigins`<sup>Required</sup> <a name="minimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins"></a>

```typescript
public readonly minimumOrigins: number;
```

- *Type:* number

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPoolConfig <a name="LoadBalancerPoolConfig" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolConfig: loadBalancerPool.LoadBalancerPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name">name</a></code> | <code>string</code> | A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins">origins</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]</code> | The list of origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions">checkRegions</a></code> | <code>string[]</code> | A list of regions from which to run health checks. Null means every Cloudflare data center. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable (the default) or disable this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude">latitude</a></code> | <code>number</code> | The latitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding">loadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | Configures load shedding policies and percentages for the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude">longitude</a></code> | <code>number</code> | The longitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins">minimumOrigins</a></code> | <code>number</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor">monitor</a></code> | <code>string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | This field is now deprecated. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationFilter">notificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | Filter pool and origin health notifications by resource type or health status. Use null to reset. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering">originSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins"></a>

```typescript
public readonly origins: IResolvable | LoadBalancerPoolOrigins[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]

The list of origins within this pool.

Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions"></a>

```typescript
public readonly checkRegions: string[];
```

- *Type:* string[]

A list of regions from which to run health checks. Null means every Cloudflare data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable (the default) or disable this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

The latitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, longitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `loadShedding`<sup>Optional</sup> <a name="loadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding"></a>

```typescript
public readonly loadShedding: LoadBalancerPoolLoadShedding;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

Configures load shedding policies and percentages for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

The longitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, latitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `minimumOrigins`<sup>Optional</sup> <a name="minimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins"></a>

```typescript
public readonly minimumOrigins: number;
```

- *Type:* number

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

This field is now deprecated.

It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `notificationFilter`<sup>Optional</sup> <a name="notificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationFilter"></a>

```typescript
public readonly notificationFilter: LoadBalancerPoolNotificationFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

Filter pool and origin health notifications by resource type or health status. Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#notification_filter LoadBalancerPool#notification_filter}

---

##### `originSteering`<sup>Optional</sup> <a name="originSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering"></a>

```typescript
public readonly originSteering: LoadBalancerPoolOriginSteering;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

### LoadBalancerPoolLoadShedding <a name="LoadBalancerPoolLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolLoadShedding: loadBalancerPool.LoadBalancerPoolLoadShedding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent">defaultPercent</a></code> | <code>number</code> | The percent of traffic to shed from the pool, according to the default policy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | The default policy to use when load shedding. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent">sessionPercent</a></code> | <code>number</code> | The percent of existing sessions to shed from the pool, according to the session policy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | Only the hash policy is supported for existing sessions (to avoid exponential decay). Available values: "hash". |

---

##### `defaultPercent`<sup>Optional</sup> <a name="defaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent"></a>

```typescript
public readonly defaultPercent: number;
```

- *Type:* number

The percent of traffic to shed from the pool, according to the default policy.

Applies to new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}

---

##### `defaultPolicy`<sup>Optional</sup> <a name="defaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

The default policy to use when load shedding.

A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.
Available values: "random", "hash".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}

---

##### `sessionPercent`<sup>Optional</sup> <a name="sessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent"></a>

```typescript
public readonly sessionPercent: number;
```

- *Type:* number

The percent of existing sessions to shed from the pool, according to the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

Only the hash policy is supported for existing sessions (to avoid exponential decay). Available values: "hash".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}

---

### LoadBalancerPoolNotificationFilter <a name="LoadBalancerPoolNotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolNotificationFilter: loadBalancerPool.LoadBalancerPoolNotificationFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | Filter options for a particular resource type (pool or origin). Use null to reset. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.pool">pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | Filter options for a particular resource type (pool or origin). Use null to reset. |

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.origin"></a>

```typescript
public readonly origin: LoadBalancerPoolNotificationFilterOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

Filter options for a particular resource type (pool or origin). Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#origin LoadBalancerPool#origin}

---

##### `pool`<sup>Optional</sup> <a name="pool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.pool"></a>

```typescript
public readonly pool: LoadBalancerPoolNotificationFilterPool;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

Filter options for a particular resource type (pool or origin). Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#pool LoadBalancerPool#pool}

---

### LoadBalancerPoolNotificationFilterOrigin <a name="LoadBalancerPoolNotificationFilterOrigin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolNotificationFilterOrigin: loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set true, disable notifications for this type of resource (pool or origin). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.healthy">healthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set true, disable notifications for this type of resource (pool or origin).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}

---

##### `healthy`<sup>Optional</sup> <a name="healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.healthy"></a>

```typescript
public readonly healthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}

---

### LoadBalancerPoolNotificationFilterPool <a name="LoadBalancerPoolNotificationFilterPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolNotificationFilterPool: loadBalancerPool.LoadBalancerPoolNotificationFilterPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set true, disable notifications for this type of resource (pool or origin). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.healthy">healthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set true, disable notifications for this type of resource (pool or origin).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}

---

##### `healthy`<sup>Optional</sup> <a name="healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.healthy"></a>

```typescript
public readonly healthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}

---

### LoadBalancerPoolOrigins <a name="LoadBalancerPoolOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolOrigins: loadBalancerPool.LoadBalancerPoolOrigins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address">address</a></code> | <code>string</code> | The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable (the default) this origin within the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name">name</a></code> | <code>string</code> | A human-identifiable name for the origin. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.port">port</a></code> | <code>number</code> | The port for upstream connections. A value of 0 means the default port for the protocol will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight">weight</a></code> | <code>number</code> | The weight of this origin relative to other origins in the pool. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname.

Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an internal/reserved address, virtual_network_id must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable (the default) this origin within the pool.

Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header"></a>

```typescript
public readonly header: LoadBalancerPoolOriginsHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-identifiable name for the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port for upstream connections. A value of 0 means the default port for the protocol will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#port LoadBalancerPool#port}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#virtual_network_id LoadBalancerPool#virtual_network_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight of this origin relative to other origins in the pool.

Based on the configured weight the total traffic is distributed among origins within the pool.
- `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the origin's outstanding requests.
- `origin_steering.policy="least_connections"`: Use weight to scale the origin's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}

---

### LoadBalancerPoolOriginsHeader <a name="LoadBalancerPoolOriginsHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolOriginsHeader: loadBalancerPool.LoadBalancerPoolOriginsHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.host">host</a></code> | <code>string[]</code> | The 'Host' header allows to override the hostname set in the HTTP request. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

The 'Host' header allows to override the hostname set in the HTTP request.

Current support is 1 'Host' header override per origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#host LoadBalancerPool#host}

---

### LoadBalancerPoolOriginSteering <a name="LoadBalancerPoolOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

const loadBalancerPoolOriginSteering: loadBalancerPool.LoadBalancerPoolOriginSteering = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy">policy</a></code> | <code>string</code> | The type of origin steering policy to use. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The type of origin steering policy to use.

`"random"`: Select an origin randomly.
- `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address.
- `"least_outstanding_requests"`: Select an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others.
- `"least_connections"`: Select an origin by taking into consideration origin weights, as well as each origin's number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
Available values: "random", "hash", "least_outstanding_requests", "least_connections".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPoolLoadSheddingOutputReference <a name="LoadBalancerPoolLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent">resetDefaultPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy">resetDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent">resetSessionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy">resetSessionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPercent` <a name="resetDefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent"></a>

```typescript
public resetDefaultPercent(): void
```

##### `resetDefaultPolicy` <a name="resetDefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy"></a>

```typescript
public resetDefaultPolicy(): void
```

##### `resetSessionPercent` <a name="resetSessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent"></a>

```typescript
public resetSessionPercent(): void
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy"></a>

```typescript
public resetSessionPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput">defaultPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput">defaultPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput">sessionPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">defaultPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">sessionPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPercentInput`<sup>Optional</sup> <a name="defaultPercentInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput"></a>

```typescript
public readonly defaultPercentInput: number;
```

- *Type:* number

---

##### `defaultPolicyInput`<sup>Optional</sup> <a name="defaultPolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput"></a>

```typescript
public readonly defaultPolicyInput: string;
```

- *Type:* string

---

##### `sessionPercentInput`<sup>Optional</sup> <a name="sessionPercentInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput"></a>

```typescript
public readonly sessionPercentInput: number;
```

- *Type:* number

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput"></a>

```typescript
public readonly sessionPolicyInput: string;
```

- *Type:* string

---

##### `defaultPercent`<sup>Required</sup> <a name="defaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```typescript
public readonly defaultPercent: number;
```

- *Type:* number

---

##### `defaultPolicy`<sup>Required</sup> <a name="defaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

---

##### `sessionPercent`<sup>Required</sup> <a name="sessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```typescript
public readonly sessionPercent: number;
```

- *Type:* number

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolLoadShedding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---


### LoadBalancerPoolNotificationFilterOriginOutputReference <a name="LoadBalancerPoolNotificationFilterOriginOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetHealthy">resetHealthy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetHealthy` <a name="resetHealthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetHealthy"></a>

```typescript
public resetHealthy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disableInput">disableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthyInput">healthyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy">healthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disableInput"></a>

```typescript
public readonly disableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyInput`<sup>Optional</sup> <a name="healthyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthyInput"></a>

```typescript
public readonly healthyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy"></a>

```typescript
public readonly healthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolNotificationFilterOrigin;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---


### LoadBalancerPoolNotificationFilterOutputReference <a name="LoadBalancerPoolNotificationFilterOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool">putPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetPool">resetPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin"></a>

```typescript
public putOrigin(value: LoadBalancerPoolNotificationFilterOrigin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---

##### `putPool` <a name="putPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool"></a>

```typescript
public putPool(value: LoadBalancerPoolNotificationFilterPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetPool` <a name="resetPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetPool"></a>

```typescript
public resetPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference">LoadBalancerPoolNotificationFilterOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.pool">pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference">LoadBalancerPoolNotificationFilterPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.originInput">originInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.poolInput">poolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.origin"></a>

```typescript
public readonly origin: LoadBalancerPoolNotificationFilterOriginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference">LoadBalancerPoolNotificationFilterOriginOutputReference</a>

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.pool"></a>

```typescript
public readonly pool: LoadBalancerPoolNotificationFilterPoolOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference">LoadBalancerPoolNotificationFilterPoolOutputReference</a>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.originInput"></a>

```typescript
public readonly originInput: IResolvable | LoadBalancerPoolNotificationFilterOrigin;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.poolInput"></a>

```typescript
public readonly poolInput: IResolvable | LoadBalancerPoolNotificationFilterPool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolNotificationFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---


### LoadBalancerPoolNotificationFilterPoolOutputReference <a name="LoadBalancerPoolNotificationFilterPoolOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetHealthy">resetHealthy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetHealthy` <a name="resetHealthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetHealthy"></a>

```typescript
public resetHealthy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disableInput">disableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthyInput">healthyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy">healthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disableInput"></a>

```typescript
public readonly disableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyInput`<sup>Optional</sup> <a name="healthyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthyInput"></a>

```typescript
public readonly healthyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy"></a>

```typescript
public readonly healthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolNotificationFilterPool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---


### LoadBalancerPoolOriginsHeaderOutputReference <a name="LoadBalancerPoolOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.hostInput">hostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string[];
```

- *Type:* string[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolOriginsHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---


### LoadBalancerPoolOriginsList <a name="LoadBalancerPoolOriginsList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolOriginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get"></a>

```typescript
public get(index: number): LoadBalancerPoolOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolOrigins[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>[]

---


### LoadBalancerPoolOriginsOutputReference <a name="LoadBalancerPoolOriginsOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolOriginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader"></a>

```typescript
public putHeader(value: LoadBalancerPoolOriginsHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.disabledAt">disabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference">LoadBalancerPoolOriginsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.disabledAt"></a>

```typescript
public readonly disabledAt: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header"></a>

```typescript
public readonly header: LoadBalancerPoolOriginsHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference">LoadBalancerPoolOriginsHeaderOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | LoadBalancerPoolOriginsHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolOrigins;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>

---


### LoadBalancerPoolOriginSteeringOutputReference <a name="LoadBalancerPoolOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```typescript
import { loadBalancerPool } from '@cdktf/provider-cloudflare'

new loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerPoolOriginSteering;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---




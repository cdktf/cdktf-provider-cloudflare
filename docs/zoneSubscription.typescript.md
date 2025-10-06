# `zoneSubscription` Submodule <a name="`zoneSubscription` Submodule" id="@cdktf/provider-cloudflare.zoneSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSubscription <a name="ZoneSubscription" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription cloudflare_zone_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

new zoneSubscription.ZoneSubscription(scope: Construct, id: string, config: ZoneSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig">ZoneSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig">ZoneSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan">putRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan">resetRatePlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRatePlan` <a name="putRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan"></a>

```typescript
public putRatePlan(value: ZoneSubscriptionRatePlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetRatePlan` <a name="resetRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan"></a>

```typescript
public resetRatePlan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

zoneSubscription.ZoneSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

zoneSubscription.ZoneSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

zoneSubscription.ZoneSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

zoneSubscription.ZoneSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd">currentPeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart">currentPeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price">price</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput">ratePlanInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `currentPeriodEnd`<sup>Required</sup> <a name="currentPeriodEnd" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd"></a>

```typescript
public readonly currentPeriodEnd: string;
```

- *Type:* string

---

##### `currentPeriodStart`<sup>Required</sup> <a name="currentPeriodStart" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart"></a>

```typescript
public readonly currentPeriodStart: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price"></a>

```typescript
public readonly price: number;
```

- *Type:* number

---

##### `ratePlan`<sup>Required</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan"></a>

```typescript
public readonly ratePlan: ZoneSubscriptionRatePlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `ratePlanInput`<sup>Optional</sup> <a name="ratePlanInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput"></a>

```typescript
public readonly ratePlanInput: IResolvable | ZoneSubscriptionRatePlan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSubscriptionConfig <a name="ZoneSubscriptionConfig" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.Initializer"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

const zoneSubscriptionConfig: zoneSubscription.ZoneSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Subscription identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency">frequency</a></code> | <code>string</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Subscription identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}

---

##### `ratePlan`<sup>Optional</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan"></a>

```typescript
public readonly ratePlan: ZoneSubscriptionRatePlan;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}

---

### ZoneSubscriptionRatePlan <a name="ZoneSubscriptionRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.Initializer"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

const zoneSubscriptionRatePlan: zoneSubscription.ZoneSubscriptionRatePlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency">currency</a></code> | <code>string</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged">externallyManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id">id</a></code> | <code>string</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract">isContract</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName">publicName</a></code> | <code>string</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope">scope</a></code> | <code>string</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets">sets</a></code> | <code>string[]</code> | The list of sets this rate plan applies to. |

---

##### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#currency ZoneSubscription#currency}

---

##### `externallyManaged`<sup>Optional</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged"></a>

```typescript
public readonly externallyManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#externally_managed ZoneSubscription#externally_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#id ZoneSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isContract`<sup>Optional</sup> <a name="isContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract"></a>

```typescript
public readonly isContract: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#is_contract ZoneSubscription#is_contract}

---

##### `publicName`<sup>Optional</sup> <a name="publicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName"></a>

```typescript
public readonly publicName: string;
```

- *Type:* string

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#public_name ZoneSubscription#public_name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}

---

##### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets"></a>

```typescript
public readonly sets: string[];
```

- *Type:* string[]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#sets ZoneSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSubscriptionRatePlanOutputReference <a name="ZoneSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer"></a>

```typescript
import { zoneSubscription } from '@cdktf/provider-cloudflare'

new zoneSubscription.ZoneSubscriptionRatePlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency">resetCurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged">resetExternallyManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract">resetIsContract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName">resetPublicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets">resetSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrency` <a name="resetCurrency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency"></a>

```typescript
public resetCurrency(): void
```

##### `resetExternallyManaged` <a name="resetExternallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```typescript
public resetExternallyManaged(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsContract` <a name="resetIsContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract"></a>

```typescript
public resetIsContract(): void
```

##### `resetPublicName` <a name="resetPublicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName"></a>

```typescript
public resetPublicName(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSets` <a name="resetSets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets"></a>

```typescript
public resetSets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput">currencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput">externallyManagedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput">isContractInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput">publicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput">setsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged">externallyManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract">isContract</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName">publicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyInput`<sup>Optional</sup> <a name="currencyInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```typescript
public readonly currencyInput: string;
```

- *Type:* string

---

##### `externallyManagedInput`<sup>Optional</sup> <a name="externallyManagedInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```typescript
public readonly externallyManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isContractInput`<sup>Optional</sup> <a name="isContractInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```typescript
public readonly isContractInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNameInput`<sup>Optional</sup> <a name="publicNameInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```typescript
public readonly publicNameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `setsInput`<sup>Optional</sup> <a name="setsInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput"></a>

```typescript
public readonly setsInput: string[];
```

- *Type:* string[]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `externallyManaged`<sup>Required</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```typescript
public readonly externallyManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isContract`<sup>Required</sup> <a name="isContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract"></a>

```typescript
public readonly isContract: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicName`<sup>Required</sup> <a name="publicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName"></a>

```typescript
public readonly publicName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets"></a>

```typescript
public readonly sets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZoneSubscriptionRatePlan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---




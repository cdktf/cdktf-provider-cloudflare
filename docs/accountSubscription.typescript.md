# `accountSubscription` Submodule <a name="`accountSubscription` Submodule" id="@cdktf/provider-cloudflare.accountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSubscription <a name="AccountSubscription" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription cloudflare_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

new accountSubscription.AccountSubscription(scope: Construct, id: string, config: AccountSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig">AccountSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig">AccountSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan">putRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetRatePlan">resetRatePlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRatePlan` <a name="putRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan"></a>

```typescript
public putRatePlan(value: AccountSubscriptionRatePlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetRatePlan` <a name="resetRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetRatePlan"></a>

```typescript
public resetRatePlan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

accountSubscription.AccountSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

accountSubscription.AccountSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

accountSubscription.AccountSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

accountSubscription.AccountSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodEnd">currentPeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodStart">currentPeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.price">price</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference">AccountSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlanInput">ratePlanInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `currentPeriodEnd`<sup>Required</sup> <a name="currentPeriodEnd" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodEnd"></a>

```typescript
public readonly currentPeriodEnd: string;
```

- *Type:* string

---

##### `currentPeriodStart`<sup>Required</sup> <a name="currentPeriodStart" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodStart"></a>

```typescript
public readonly currentPeriodStart: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.price"></a>

```typescript
public readonly price: number;
```

- *Type:* number

---

##### `ratePlan`<sup>Required</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlan"></a>

```typescript
public readonly ratePlan: AccountSubscriptionRatePlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference">AccountSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `ratePlanInput`<sup>Optional</sup> <a name="ratePlanInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlanInput"></a>

```typescript
public readonly ratePlanInput: IResolvable | AccountSubscriptionRatePlan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSubscriptionConfig <a name="AccountSubscriptionConfig" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.Initializer"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

const accountSubscriptionConfig: accountSubscription.AccountSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.frequency">frequency</a></code> | <code>string</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#account_id AccountSubscription#account_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#frequency AccountSubscription#frequency}

---

##### `ratePlan`<sup>Optional</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.ratePlan"></a>

```typescript
public readonly ratePlan: AccountSubscriptionRatePlan;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}

---

### AccountSubscriptionRatePlan <a name="AccountSubscriptionRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.Initializer"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

const accountSubscriptionRatePlan: accountSubscription.AccountSubscriptionRatePlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.currency">currency</a></code> | <code>string</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.externallyManaged">externallyManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.id">id</a></code> | <code>string</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.isContract">isContract</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.publicName">publicName</a></code> | <code>string</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.scope">scope</a></code> | <code>string</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.sets">sets</a></code> | <code>string[]</code> | The list of sets this rate plan applies to. |

---

##### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#currency AccountSubscription#currency}

---

##### `externallyManaged`<sup>Optional</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.externallyManaged"></a>

```typescript
public readonly externallyManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#externally_managed AccountSubscription#externally_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#id AccountSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isContract`<sup>Optional</sup> <a name="isContract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.isContract"></a>

```typescript
public readonly isContract: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#is_contract AccountSubscription#is_contract}

---

##### `publicName`<sup>Optional</sup> <a name="publicName" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.publicName"></a>

```typescript
public readonly publicName: string;
```

- *Type:* string

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#public_name AccountSubscription#public_name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#scope AccountSubscription#scope}

---

##### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.sets"></a>

```typescript
public readonly sets: string[];
```

- *Type:* string[]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_subscription#sets AccountSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSubscriptionRatePlanOutputReference <a name="AccountSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer"></a>

```typescript
import { accountSubscription } from '@cdktf/provider-cloudflare'

new accountSubscription.AccountSubscriptionRatePlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetCurrency">resetCurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetExternallyManaged">resetExternallyManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetIsContract">resetIsContract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetPublicName">resetPublicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetSets">resetSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrency` <a name="resetCurrency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetCurrency"></a>

```typescript
public resetCurrency(): void
```

##### `resetExternallyManaged` <a name="resetExternallyManaged" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```typescript
public resetExternallyManaged(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsContract` <a name="resetIsContract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetIsContract"></a>

```typescript
public resetIsContract(): void
```

##### `resetPublicName` <a name="resetPublicName" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetPublicName"></a>

```typescript
public resetPublicName(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSets` <a name="resetSets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetSets"></a>

```typescript
public resetSets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currencyInput">currencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManagedInput">externallyManagedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContractInput">isContractInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicNameInput">publicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.setsInput">setsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManaged">externallyManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContract">isContract</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicName">publicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyInput`<sup>Optional</sup> <a name="currencyInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```typescript
public readonly currencyInput: string;
```

- *Type:* string

---

##### `externallyManagedInput`<sup>Optional</sup> <a name="externallyManagedInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```typescript
public readonly externallyManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isContractInput`<sup>Optional</sup> <a name="isContractInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```typescript
public readonly isContractInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNameInput`<sup>Optional</sup> <a name="publicNameInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```typescript
public readonly publicNameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `setsInput`<sup>Optional</sup> <a name="setsInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.setsInput"></a>

```typescript
public readonly setsInput: string[];
```

- *Type:* string[]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `externallyManaged`<sup>Required</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```typescript
public readonly externallyManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isContract`<sup>Required</sup> <a name="isContract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContract"></a>

```typescript
public readonly isContract: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicName`<sup>Required</sup> <a name="publicName" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicName"></a>

```typescript
public readonly publicName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.sets"></a>

```typescript
public readonly sets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountSubscriptionRatePlan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

---




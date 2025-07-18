# `logpushOwnershipChallenge` Submodule <a name="`logpushOwnershipChallenge` Submodule" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushOwnershipChallenge <a name="LogpushOwnershipChallenge" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/logpush_ownership_challenge cloudflare_logpush_ownership_challenge}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer"></a>

```typescript
import { logpushOwnershipChallenge } from '@cdktf/provider-cloudflare'

new logpushOwnershipChallenge.LogpushOwnershipChallenge(scope: Construct, id: string, config: LogpushOwnershipChallengeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig">LogpushOwnershipChallengeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig">LogpushOwnershipChallengeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogpushOwnershipChallenge resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct"></a>

```typescript
import { logpushOwnershipChallenge } from '@cdktf/provider-cloudflare'

logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement"></a>

```typescript
import { logpushOwnershipChallenge } from '@cdktf/provider-cloudflare'

logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource"></a>

```typescript
import { logpushOwnershipChallenge } from '@cdktf/provider-cloudflare'

logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport"></a>

```typescript
import { logpushOwnershipChallenge } from '@cdktf/provider-cloudflare'

logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogpushOwnershipChallenge resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogpushOwnershipChallenge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogpushOwnershipChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/logpush_ownership_challenge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogpushOwnershipChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.valid">valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConfInput">destinationConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConf">destinationConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.valid"></a>

```typescript
public readonly valid: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `destinationConfInput`<sup>Optional</sup> <a name="destinationConfInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConfInput"></a>

```typescript
public readonly destinationConfInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `destinationConf`<sup>Required</sup> <a name="destinationConf" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConf"></a>

```typescript
public readonly destinationConf: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushOwnershipChallengeConfig <a name="LogpushOwnershipChallengeConfig" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.Initializer"></a>

```typescript
import { logpushOwnershipChallenge } from '@cdktf/provider-cloudflare'

const logpushOwnershipChallengeConfig: logpushOwnershipChallenge.LogpushOwnershipChallengeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.destinationConf">destinationConf</a></code> | <code>string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationConf`<sup>Required</sup> <a name="destinationConf" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.destinationConf"></a>

```typescript
public readonly destinationConf: string;
```

- *Type:* string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/logpush_ownership_challenge#destination_conf LogpushOwnershipChallenge#destination_conf}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/logpush_ownership_challenge#account_id LogpushOwnershipChallenge#account_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/logpush_ownership_challenge#zone_id LogpushOwnershipChallenge#zone_id}

---




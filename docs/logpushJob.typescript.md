# `logpushJob` Submodule <a name="`logpushJob` Submodule" id="@cdktf/provider-cloudflare.logpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushJob <a name="LogpushJob" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

new logpushJob.LogpushJob(scope: Construct, id: string, config: LogpushJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions">putOutputOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions">resetLogpullOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes">resetMaxUploadBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds">resetMaxUploadIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords">resetMaxUploadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOutputOptions">resetOutputOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge">resetOwnershipChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputOptions` <a name="putOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions"></a>

```typescript
public putOutputOptions(value: LogpushJobOutputOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetLogpullOptions` <a name="resetLogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions"></a>

```typescript
public resetLogpullOptions(): void
```

##### `resetMaxUploadBytes` <a name="resetMaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes"></a>

```typescript
public resetMaxUploadBytes(): void
```

##### `resetMaxUploadIntervalSeconds` <a name="resetMaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds"></a>

```typescript
public resetMaxUploadIntervalSeconds(): void
```

##### `resetMaxUploadRecords` <a name="resetMaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords"></a>

```typescript
public resetMaxUploadRecords(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOutputOptions` <a name="resetOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOutputOptions"></a>

```typescript
public resetOutputOptions(): void
```

##### `resetOwnershipChallenge` <a name="resetOwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge"></a>

```typescript
public resetOwnershipChallenge(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

logpushJob.LogpushJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

logpushJob.LogpushJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

logpushJob.LogpushJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

logpushJob.LogpushJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogpushJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogpushJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogpushJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptions">outputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference">LogpushJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput">destinationConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput">logpullOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput">maxUploadBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput">maxUploadIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput">maxUploadRecordsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptionsInput">outputOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput">ownershipChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf">destinationConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions">logpullOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes">maxUploadBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds">maxUploadIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords">maxUploadRecords</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge">ownershipChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputOptions`<sup>Required</sup> <a name="outputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptions"></a>

```typescript
public readonly outputOptions: LogpushJobOutputOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference">LogpushJobOutputOptionsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `destinationConfInput`<sup>Optional</sup> <a name="destinationConfInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput"></a>

```typescript
public readonly destinationConfInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `logpullOptionsInput`<sup>Optional</sup> <a name="logpullOptionsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput"></a>

```typescript
public readonly logpullOptionsInput: string;
```

- *Type:* string

---

##### `maxUploadBytesInput`<sup>Optional</sup> <a name="maxUploadBytesInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput"></a>

```typescript
public readonly maxUploadBytesInput: number;
```

- *Type:* number

---

##### `maxUploadIntervalSecondsInput`<sup>Optional</sup> <a name="maxUploadIntervalSecondsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput"></a>

```typescript
public readonly maxUploadIntervalSecondsInput: number;
```

- *Type:* number

---

##### `maxUploadRecordsInput`<sup>Optional</sup> <a name="maxUploadRecordsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput"></a>

```typescript
public readonly maxUploadRecordsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputOptionsInput`<sup>Optional</sup> <a name="outputOptionsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptionsInput"></a>

```typescript
public readonly outputOptionsInput: LogpushJobOutputOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

---

##### `ownershipChallengeInput`<sup>Optional</sup> <a name="ownershipChallengeInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput"></a>

```typescript
public readonly ownershipChallengeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `destinationConf`<sup>Required</sup> <a name="destinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf"></a>

```typescript
public readonly destinationConf: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logpullOptions`<sup>Required</sup> <a name="logpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions"></a>

```typescript
public readonly logpullOptions: string;
```

- *Type:* string

---

##### `maxUploadBytes`<sup>Required</sup> <a name="maxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes"></a>

```typescript
public readonly maxUploadBytes: number;
```

- *Type:* number

---

##### `maxUploadIntervalSeconds`<sup>Required</sup> <a name="maxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds"></a>

```typescript
public readonly maxUploadIntervalSeconds: number;
```

- *Type:* number

---

##### `maxUploadRecords`<sup>Required</sup> <a name="maxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords"></a>

```typescript
public readonly maxUploadRecords: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownershipChallenge`<sup>Required</sup> <a name="ownershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge"></a>

```typescript
public readonly ownershipChallenge: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushJobConfig <a name="LogpushJobConfig" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.Initializer"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

const logpushJobConfig: logpushJob.LogpushJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset">dataset</a></code> | <code>string</code> | The kind of the dataset to use with the logpush job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf">destinationConf</a></code> | <code>string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter">filter</a></code> | <code>string</code> | Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency">frequency</a></code> | <code>string</code> | A higher frequency will result in logs being pushed on faster with smaller files. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#id LogpushJob#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind">kind</a></code> | <code>string</code> | The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions">logpullOptions</a></code> | <code>string</code> | Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes">maxUploadBytes</a></code> | <code>number</code> | The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds">maxUploadIntervalSeconds</a></code> | <code>number</code> | The maximum interval in seconds for log batches. Value must be between 30 and 300. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords">maxUploadRecords</a></code> | <code>number</code> | The maximum number of log lines per batch. Value must be between 1000 and 1,000,000. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name">name</a></code> | <code>string</code> | The name of the logpush job to create. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.outputOptions">outputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | output_options block. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge">ownershipChallenge</a></code> | <code>string</code> | Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

The kind of the dataset to use with the logpush job.

Available values: `access_requests`, `casb_findings`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`, `device_posture_results`, `zero_trust_network_sessions`, `magic_ids_detections`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `destinationConf`<sup>Required</sup> <a name="destinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf"></a>

```typescript
public readonly destinationConf: string;
```

- *Type:* string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

A higher frequency will result in logs being pushed on faster with smaller files.

`low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#id LogpushJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `logpullOptions`<sup>Optional</sup> <a name="logpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions"></a>

```typescript
public readonly logpullOptions: string;
```

- *Type:* string

Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `maxUploadBytes`<sup>Optional</sup> <a name="maxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes"></a>

```typescript
public readonly maxUploadBytes: number;
```

- *Type:* number

The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `maxUploadIntervalSeconds`<sup>Optional</sup> <a name="maxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds"></a>

```typescript
public readonly maxUploadIntervalSeconds: number;
```

- *Type:* number

The maximum interval in seconds for log batches. Value must be between 30 and 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `maxUploadRecords`<sup>Optional</sup> <a name="maxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords"></a>

```typescript
public readonly maxUploadRecords: number;
```

- *Type:* number

The maximum number of log lines per batch. Value must be between 1000 and 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the logpush job to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#name LogpushJob#name}

---

##### `outputOptions`<sup>Optional</sup> <a name="outputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.outputOptions"></a>

```typescript
public readonly outputOptions: LogpushJobOutputOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

output_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#output_options LogpushJob#output_options}

---

##### `ownershipChallenge`<sup>Optional</sup> <a name="ownershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge"></a>

```typescript
public readonly ownershipChallenge: string;
```

- *Type:* string

Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic.

See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---

### LogpushJobOutputOptions <a name="LogpushJobOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.Initializer"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

const logpushJobOutputOptions: logpushJob.LogpushJobOutputOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchPrefix">batchPrefix</a></code> | <code>string</code> | String to be prepended before each batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchSuffix">batchSuffix</a></code> | <code>string</code> | String to be appended after each batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.cve20214428">cve20214428</a></code> | <code>boolean \| cdktf.IResolvable</code> | Mitigation for CVE-2021-44228. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | String to join fields. This field be ignored when record_template is set. Defaults to `,`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | List of field names to be included in the Logpush output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.outputType">outputType</a></code> | <code>string</code> | Specifies the output type. Available values: `ndjson`, `csv`. Defaults to `ndjson`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | String to be inserted in-between the records as separator. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordPrefix">recordPrefix</a></code> | <code>string</code> | String to be prepended before each record. Defaults to `{`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordSuffix">recordSuffix</a></code> | <code>string</code> | String to be appended after each record. Defaults to `}`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordTemplate">recordTemplate</a></code> | <code>string</code> | String to use as template for each record instead of the default comma-separated list. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.sampleRate">sampleRate</a></code> | <code>number</code> | Specifies the sampling rate. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Specifies the format for timestamps. Available values: `unixnano`, `unix`, `rfc3339`. Defaults to `unixnano`. |

---

##### `batchPrefix`<sup>Optional</sup> <a name="batchPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchPrefix"></a>

```typescript
public readonly batchPrefix: string;
```

- *Type:* string

String to be prepended before each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#batch_prefix LogpushJob#batch_prefix}

---

##### `batchSuffix`<sup>Optional</sup> <a name="batchSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchSuffix"></a>

```typescript
public readonly batchSuffix: string;
```

- *Type:* string

String to be appended after each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#batch_suffix LogpushJob#batch_suffix}

---

##### `cve20214428`<sup>Optional</sup> <a name="cve20214428" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.cve20214428"></a>

```typescript
public readonly cve20214428: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Mitigation for CVE-2021-44228.

If set to true, will cause all occurrences of ${ in the generated files to be replaced with x{. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#cve20214428 LogpushJob#cve20214428}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

String to join fields. This field be ignored when record_template is set. Defaults to `,`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#field_delimiter LogpushJob#field_delimiter}

---

##### `fieldNames`<sup>Optional</sup> <a name="fieldNames" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

List of field names to be included in the Logpush output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#field_names LogpushJob#field_names}

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

Specifies the output type. Available values: `ndjson`, `csv`. Defaults to `ndjson`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#output_type LogpushJob#output_type}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

String to be inserted in-between the records as separator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#record_delimiter LogpushJob#record_delimiter}

---

##### `recordPrefix`<sup>Optional</sup> <a name="recordPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordPrefix"></a>

```typescript
public readonly recordPrefix: string;
```

- *Type:* string

String to be prepended before each record. Defaults to `{`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#record_prefix LogpushJob#record_prefix}

---

##### `recordSuffix`<sup>Optional</sup> <a name="recordSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordSuffix"></a>

```typescript
public readonly recordSuffix: string;
```

- *Type:* string

String to be appended after each record. Defaults to `}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#record_suffix LogpushJob#record_suffix}

---

##### `recordTemplate`<sup>Optional</sup> <a name="recordTemplate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordTemplate"></a>

```typescript
public readonly recordTemplate: string;
```

- *Type:* string

String to use as template for each record instead of the default comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#record_template LogpushJob#record_template}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

Specifies the sampling rate. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#sample_rate LogpushJob#sample_rate}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Specifies the format for timestamps. Available values: `unixnano`, `unix`, `rfc3339`. Defaults to `unixnano`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/logpush_job#timestamp_format LogpushJob#timestamp_format}

---

## Classes <a name="Classes" id="Classes"></a>

### LogpushJobOutputOptionsOutputReference <a name="LogpushJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer"></a>

```typescript
import { logpushJob } from '@cdktf/provider-cloudflare'

new logpushJob.LogpushJobOutputOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchPrefix">resetBatchPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchSuffix">resetBatchSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetCve20214428">resetCve20214428</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldNames">resetFieldNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordDelimiter">resetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordPrefix">resetRecordPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordSuffix">resetRecordSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordTemplate">resetRecordTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchPrefix` <a name="resetBatchPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchPrefix"></a>

```typescript
public resetBatchPrefix(): void
```

##### `resetBatchSuffix` <a name="resetBatchSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchSuffix"></a>

```typescript
public resetBatchSuffix(): void
```

##### `resetCve20214428` <a name="resetCve20214428" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetCve20214428"></a>

```typescript
public resetCve20214428(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFieldNames` <a name="resetFieldNames" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldNames"></a>

```typescript
public resetFieldNames(): void
```

##### `resetOutputType` <a name="resetOutputType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetOutputType"></a>

```typescript
public resetOutputType(): void
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordDelimiter"></a>

```typescript
public resetRecordDelimiter(): void
```

##### `resetRecordPrefix` <a name="resetRecordPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordPrefix"></a>

```typescript
public resetRecordPrefix(): void
```

##### `resetRecordSuffix` <a name="resetRecordSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordSuffix"></a>

```typescript
public resetRecordSuffix(): void
```

##### `resetRecordTemplate` <a name="resetRecordTemplate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordTemplate"></a>

```typescript
public resetRecordTemplate(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefixInput">batchPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffixInput">batchSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428Input">cve20214428Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNamesInput">fieldNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefixInput">recordPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffixInput">recordSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplateInput">recordTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefix">batchPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffix">batchSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428">cve20214428</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefix">recordPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffix">recordSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplate">recordTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchPrefixInput`<sup>Optional</sup> <a name="batchPrefixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefixInput"></a>

```typescript
public readonly batchPrefixInput: string;
```

- *Type:* string

---

##### `batchSuffixInput`<sup>Optional</sup> <a name="batchSuffixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffixInput"></a>

```typescript
public readonly batchSuffixInput: string;
```

- *Type:* string

---

##### `cve20214428Input`<sup>Optional</sup> <a name="cve20214428Input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428Input"></a>

```typescript
public readonly cve20214428Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `fieldNamesInput`<sup>Optional</sup> <a name="fieldNamesInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNamesInput"></a>

```typescript
public readonly fieldNamesInput: string[];
```

- *Type:* string[]

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputTypeInput"></a>

```typescript
public readonly outputTypeInput: string;
```

- *Type:* string

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiterInput"></a>

```typescript
public readonly recordDelimiterInput: string;
```

- *Type:* string

---

##### `recordPrefixInput`<sup>Optional</sup> <a name="recordPrefixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefixInput"></a>

```typescript
public readonly recordPrefixInput: string;
```

- *Type:* string

---

##### `recordSuffixInput`<sup>Optional</sup> <a name="recordSuffixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffixInput"></a>

```typescript
public readonly recordSuffixInput: string;
```

- *Type:* string

---

##### `recordTemplateInput`<sup>Optional</sup> <a name="recordTemplateInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplateInput"></a>

```typescript
public readonly recordTemplateInput: string;
```

- *Type:* string

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `batchPrefix`<sup>Required</sup> <a name="batchPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefix"></a>

```typescript
public readonly batchPrefix: string;
```

- *Type:* string

---

##### `batchSuffix`<sup>Required</sup> <a name="batchSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffix"></a>

```typescript
public readonly batchSuffix: string;
```

- *Type:* string

---

##### `cve20214428`<sup>Required</sup> <a name="cve20214428" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428"></a>

```typescript
public readonly cve20214428: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `recordPrefix`<sup>Required</sup> <a name="recordPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefix"></a>

```typescript
public readonly recordPrefix: string;
```

- *Type:* string

---

##### `recordSuffix`<sup>Required</sup> <a name="recordSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffix"></a>

```typescript
public readonly recordSuffix: string;
```

- *Type:* string

---

##### `recordTemplate`<sup>Required</sup> <a name="recordTemplate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplate"></a>

```typescript
public readonly recordTemplate: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogpushJobOutputOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

---




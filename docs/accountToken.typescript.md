# `accountToken` Submodule <a name="`accountToken` Submodule" id="@cdktf/provider-cloudflare.accountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountToken <a name="AccountToken" id="@cdktf/provider-cloudflare.accountToken.AccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token cloudflare_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountToken(scope: Construct, id: string, config: AccountTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig">AccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig">AccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetNotBefore">resetNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accountToken.AccountToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putCondition"></a>

```typescript
public putCondition(value: AccountTokenCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>

---

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | AccountTokenPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetExpiresOn"></a>

```typescript
public resetExpiresOn(): void
```

##### `resetNotBefore` <a name="resetNotBefore" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetNotBefore"></a>

```typescript
public resetNotBefore(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isConstruct"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

accountToken.AccountToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformElement"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

accountToken.AccountToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformResource"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

accountToken.AccountToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

accountToken.AccountToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference">AccountTokenConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.issuedOn">issuedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.lastUsedOn">lastUsedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList">AccountTokenPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOnInput">expiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBeforeInput">notBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.policiesInput">policiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.condition"></a>

```typescript
public readonly condition: AccountTokenConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference">AccountTokenConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuedOn`<sup>Required</sup> <a name="issuedOn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.issuedOn"></a>

```typescript
public readonly issuedOn: string;
```

- *Type:* string

---

##### `lastUsedOn`<sup>Required</sup> <a name="lastUsedOn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.lastUsedOn"></a>

```typescript
public readonly lastUsedOn: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.policies"></a>

```typescript
public readonly policies: AccountTokenPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList">AccountTokenPoliciesList</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | AccountTokenCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOnInput"></a>

```typescript
public readonly expiresOnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notBeforeInput`<sup>Optional</sup> <a name="notBeforeInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBeforeInput"></a>

```typescript
public readonly notBeforeInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | AccountTokenPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountTokenCondition <a name="AccountTokenCondition" id="@cdktf/provider-cloudflare.accountToken.AccountTokenCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenCondition.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

const accountTokenCondition: accountToken.AccountTokenCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition.property.requestIp">requestIp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a></code> | Client IP restrictions. |

---

##### `requestIp`<sup>Optional</sup> <a name="requestIp" id="@cdktf/provider-cloudflare.accountToken.AccountTokenCondition.property.requestIp"></a>

```typescript
public readonly requestIp: AccountTokenConditionRequestIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>

Client IP restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#request_ip AccountToken#request_ip}

---

### AccountTokenConditionRequestIp <a name="AccountTokenConditionRequestIp" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

const accountTokenConditionRequestIp: accountToken.AccountTokenConditionRequestIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.in">in</a></code> | <code>string[]</code> | List of IPv4/IPv6 CIDR addresses. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.notIn">notIn</a></code> | <code>string[]</code> | List of IPv4/IPv6 CIDR addresses. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#in AccountToken#in}

---

##### `notIn`<sup>Optional</sup> <a name="notIn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#not_in AccountToken#not_in}

---

### AccountTokenConfig <a name="AccountTokenConfig" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

const accountTokenConfig: accountToken.AccountTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.name">name</a></code> | <code>string</code> | Token name. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.policies">policies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]</code> | List of access policies assigned to the token. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#condition AccountToken#condition}. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.expiresOn">expiresOn</a></code> | <code>string</code> | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.notBefore">notBefore</a></code> | <code>string</code> | The time before which the token MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.status">status</a></code> | <code>string</code> | Status of the token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#account_id AccountToken#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#name AccountToken#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.policies"></a>

```typescript
public readonly policies: IResolvable | AccountTokenPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]

List of access policies assigned to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#policies AccountToken#policies}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.condition"></a>

```typescript
public readonly condition: AccountTokenCondition;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#condition AccountToken#condition}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

The expiration time on or after which the JWT MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#expires_on AccountToken#expires_on}

---

##### `notBefore`<sup>Optional</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

The time before which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#not_before AccountToken#not_before}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#status AccountToken#status}

---

### AccountTokenPolicies <a name="AccountTokenPolicies" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

const accountTokenPolicies: accountToken.AccountTokenPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.effect">effect</a></code> | <code>string</code> | Allow or deny operations against the resources. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.permissionGroups">permissionGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]</code> | A set of permission groups that are specified to the policy. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.resources">resources</a></code> | <code>{[ key: string ]: string}</code> | A list of resource names that the policy applies to. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Allow or deny operations against the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#effect AccountToken#effect}

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.permissionGroups"></a>

```typescript
public readonly permissionGroups: IResolvable | AccountTokenPoliciesPermissionGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]

A set of permission groups that are specified to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#permission_groups AccountToken#permission_groups}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.resources"></a>

```typescript
public readonly resources: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of resource names that the policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#resources AccountToken#resources}

---

### AccountTokenPoliciesPermissionGroups <a name="AccountTokenPoliciesPermissionGroups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

const accountTokenPoliciesPermissionGroups: accountToken.AccountTokenPoliciesPermissionGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.id">id</a></code> | <code>string</code> | Identifier of the group. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a></code> | Attributes associated to the permission group. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#id AccountToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.meta"></a>

```typescript
public readonly meta: AccountTokenPoliciesPermissionGroupsMeta;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>

Attributes associated to the permission group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#meta AccountToken#meta}

---

### AccountTokenPoliciesPermissionGroupsMeta <a name="AccountTokenPoliciesPermissionGroupsMeta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

const accountTokenPoliciesPermissionGroupsMeta: accountToken.AccountTokenPoliciesPermissionGroupsMeta = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#key AccountToken#key}. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#value AccountToken#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#key AccountToken#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/account_token#value AccountToken#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountTokenConditionOutputReference <a name="AccountTokenConditionOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp">putRequestIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resetRequestIp">resetRequestIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestIp` <a name="putRequestIp" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp"></a>

```typescript
public putRequestIp(value: AccountTokenConditionRequestIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>

---

##### `resetRequestIp` <a name="resetRequestIp" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resetRequestIp"></a>

```typescript
public resetRequestIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIp">requestIp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference">AccountTokenConditionRequestIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIpInput">requestIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestIp`<sup>Required</sup> <a name="requestIp" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIp"></a>

```typescript
public readonly requestIp: AccountTokenConditionRequestIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference">AccountTokenConditionRequestIpOutputReference</a>

---

##### `requestIpInput`<sup>Optional</sup> <a name="requestIpInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIpInput"></a>

```typescript
public readonly requestIpInput: IResolvable | AccountTokenConditionRequestIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>

---


### AccountTokenConditionRequestIpOutputReference <a name="AccountTokenConditionRequestIpOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenConditionRequestIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetNotIn">resetNotIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIn` <a name="resetIn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetNotIn` <a name="resetNotIn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetNotIn"></a>

```typescript
public resetNotIn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.inInput">inInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notInInput">notInInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.in">in</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notIn">notIn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.inInput"></a>

```typescript
public readonly inInput: string[];
```

- *Type:* string[]

---

##### `notInInput`<sup>Optional</sup> <a name="notInInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notInInput"></a>

```typescript
public readonly notInInput: string[];
```

- *Type:* string[]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

---

##### `notIn`<sup>Required</sup> <a name="notIn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenConditionRequestIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>

---


### AccountTokenPoliciesList <a name="AccountTokenPoliciesList" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.get"></a>

```typescript
public get(index: number): AccountTokenPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>[]

---


### AccountTokenPoliciesOutputReference <a name="AccountTokenPoliciesOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.putPermissionGroups">putPermissionGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissionGroups` <a name="putPermissionGroups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.putPermissionGroups"></a>

```typescript
public putPermissionGroups(value: IResolvable | AccountTokenPoliciesPermissionGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.putPermissionGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroups">permissionGroups</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList">AccountTokenPoliciesPermissionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroupsInput">permissionGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resources">resources</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroups"></a>

```typescript
public readonly permissionGroups: AccountTokenPoliciesPermissionGroupsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList">AccountTokenPoliciesPermissionGroupsList</a>

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `permissionGroupsInput`<sup>Optional</sup> <a name="permissionGroupsInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroupsInput"></a>

```typescript
public readonly permissionGroupsInput: IResolvable | AccountTokenPoliciesPermissionGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resources"></a>

```typescript
public readonly resources: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>

---


### AccountTokenPoliciesPermissionGroupsList <a name="AccountTokenPoliciesPermissionGroupsList" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenPoliciesPermissionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.get"></a>

```typescript
public get(index: number): AccountTokenPoliciesPermissionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenPoliciesPermissionGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>[]

---


### AccountTokenPoliciesPermissionGroupsMetaOutputReference <a name="AccountTokenPoliciesPermissionGroupsMetaOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenPoliciesPermissionGroupsMeta;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>

---


### AccountTokenPoliciesPermissionGroupsOutputReference <a name="AccountTokenPoliciesPermissionGroupsOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer"></a>

```typescript
import { accountToken } from '@cdktf/provider-cloudflare'

new accountToken.AccountTokenPoliciesPermissionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta">putMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resetMeta">resetMeta</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMeta` <a name="putMeta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta"></a>

```typescript
public putMeta(value: AccountTokenPoliciesPermissionGroupsMeta): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>

---

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resetMeta"></a>

```typescript
public resetMeta(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference">AccountTokenPoliciesPermissionGroupsMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.metaInput">metaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.meta"></a>

```typescript
public readonly meta: AccountTokenPoliciesPermissionGroupsMetaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference">AccountTokenPoliciesPermissionGroupsMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.metaInput"></a>

```typescript
public readonly metaInput: IResolvable | AccountTokenPoliciesPermissionGroupsMeta;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountTokenPoliciesPermissionGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>

---




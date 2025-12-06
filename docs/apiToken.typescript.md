# `apiToken` Submodule <a name="`apiToken` Submodule" id="@cdktf/provider-cloudflare.apiToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiToken <a name="ApiToken" id="@cdktf/provider-cloudflare.apiToken.ApiToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token cloudflare_api_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiToken(scope: Construct, id: string, config: ApiTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig">ApiTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig">ApiTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetNotBefore">resetNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.apiToken.ApiToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putCondition"></a>

```typescript
public putCondition(value: ApiTokenCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

---

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | ApiTokenPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetExpiresOn"></a>

```typescript
public resetExpiresOn(): void
```

##### `resetNotBefore` <a name="resetNotBefore" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetNotBefore"></a>

```typescript
public resetNotBefore(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isConstruct"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

apiToken.ApiToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformElement"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

apiToken.ApiToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformResource"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

apiToken.ApiToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

apiToken.ApiToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference">ApiTokenConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.issuedOn">issuedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.lastUsedOn">lastUsedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList">ApiTokenPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOnInput">expiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBeforeInput">notBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.policiesInput">policiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.condition"></a>

```typescript
public readonly condition: ApiTokenConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference">ApiTokenConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuedOn`<sup>Required</sup> <a name="issuedOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.issuedOn"></a>

```typescript
public readonly issuedOn: string;
```

- *Type:* string

---

##### `lastUsedOn`<sup>Required</sup> <a name="lastUsedOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.lastUsedOn"></a>

```typescript
public readonly lastUsedOn: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.policies"></a>

```typescript
public readonly policies: ApiTokenPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList">ApiTokenPoliciesList</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | ApiTokenCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOnInput"></a>

```typescript
public readonly expiresOnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notBeforeInput`<sup>Optional</sup> <a name="notBeforeInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBeforeInput"></a>

```typescript
public readonly notBeforeInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | ApiTokenPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiTokenCondition <a name="ApiTokenCondition" id="@cdktf/provider-cloudflare.apiToken.ApiTokenCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenCondition.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

const apiTokenCondition: apiToken.ApiTokenCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition.property.requestIp">requestIp</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a></code> | Client IP restrictions. |

---

##### `requestIp`<sup>Optional</sup> <a name="requestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenCondition.property.requestIp"></a>

```typescript
public readonly requestIp: ApiTokenConditionRequestIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

Client IP restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#request_ip ApiToken#request_ip}

---

### ApiTokenConditionRequestIp <a name="ApiTokenConditionRequestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

const apiTokenConditionRequestIp: apiToken.ApiTokenConditionRequestIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.in">in</a></code> | <code>string[]</code> | List of IPv4/IPv6 CIDR addresses. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.notIn">notIn</a></code> | <code>string[]</code> | List of IPv4/IPv6 CIDR addresses. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#in ApiToken#in}

---

##### `notIn`<sup>Optional</sup> <a name="notIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#not_in ApiToken#not_in}

---

### ApiTokenConfig <a name="ApiTokenConfig" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

const apiTokenConfig: apiToken.ApiTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.name">name</a></code> | <code>string</code> | Token name. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.policies">policies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]</code> | Set of access policies assigned to the token. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#condition ApiToken#condition}. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.expiresOn">expiresOn</a></code> | <code>string</code> | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.notBefore">notBefore</a></code> | <code>string</code> | The time before which the token MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.status">status</a></code> | <code>string</code> | Status of the token. Available values: "active", "disabled", "expired". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#name ApiToken#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.policies"></a>

```typescript
public readonly policies: IResolvable | ApiTokenPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]

Set of access policies assigned to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#policies ApiToken#policies}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.condition"></a>

```typescript
public readonly condition: ApiTokenCondition;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#condition ApiToken#condition}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

The expiration time on or after which the JWT MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#expires_on ApiToken#expires_on}

---

##### `notBefore`<sup>Optional</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

The time before which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#not_before ApiToken#not_before}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the token. Available values: "active", "disabled", "expired".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#status ApiToken#status}

---

### ApiTokenPolicies <a name="ApiTokenPolicies" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

const apiTokenPolicies: apiToken.ApiTokenPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.property.effect">effect</a></code> | <code>string</code> | Allow or deny operations against the resources. Available values: "allow", "deny". |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.property.permissionGroups">permissionGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]</code> | A set of permission groups that are specified to the policy. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.property.resources">resources</a></code> | <code>string</code> | A json object representing the resources that are specified to the policy. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Allow or deny operations against the resources. Available values: "allow", "deny".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#effect ApiToken#effect}

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.property.permissionGroups"></a>

```typescript
public readonly permissionGroups: IResolvable | ApiTokenPoliciesPermissionGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]

A set of permission groups that are specified to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#permission_groups ApiToken#permission_groups}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies.property.resources"></a>

```typescript
public readonly resources: string;
```

- *Type:* string

A json object representing the resources that are specified to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#resources ApiToken#resources}

---

### ApiTokenPoliciesPermissionGroups <a name="ApiTokenPoliciesPermissionGroups" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

const apiTokenPoliciesPermissionGroups: apiToken.ApiTokenPoliciesPermissionGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups.property.id">id</a></code> | <code>string</code> | Identifier of the permission group. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier of the permission group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_token#id ApiToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiTokenConditionOutputReference <a name="ApiTokenConditionOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiTokenConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.putRequestIp">putRequestIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resetRequestIp">resetRequestIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestIp` <a name="putRequestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.putRequestIp"></a>

```typescript
public putRequestIp(value: ApiTokenConditionRequestIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.putRequestIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

---

##### `resetRequestIp` <a name="resetRequestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resetRequestIp"></a>

```typescript
public resetRequestIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIp">requestIp</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference">ApiTokenConditionRequestIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIpInput">requestIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestIp`<sup>Required</sup> <a name="requestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIp"></a>

```typescript
public readonly requestIp: ApiTokenConditionRequestIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference">ApiTokenConditionRequestIpOutputReference</a>

---

##### `requestIpInput`<sup>Optional</sup> <a name="requestIpInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIpInput"></a>

```typescript
public readonly requestIpInput: IResolvable | ApiTokenConditionRequestIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiTokenCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

---


### ApiTokenConditionRequestIpOutputReference <a name="ApiTokenConditionRequestIpOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiTokenConditionRequestIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetNotIn">resetNotIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIn` <a name="resetIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetNotIn` <a name="resetNotIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetNotIn"></a>

```typescript
public resetNotIn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.inInput">inInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notInInput">notInInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.in">in</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notIn">notIn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.inInput"></a>

```typescript
public readonly inInput: string[];
```

- *Type:* string[]

---

##### `notInInput`<sup>Optional</sup> <a name="notInInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notInInput"></a>

```typescript
public readonly notInInput: string[];
```

- *Type:* string[]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.in"></a>

```typescript
public readonly in: string[];
```

- *Type:* string[]

---

##### `notIn`<sup>Required</sup> <a name="notIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notIn"></a>

```typescript
public readonly notIn: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiTokenConditionRequestIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

---


### ApiTokenPoliciesList <a name="ApiTokenPoliciesList" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiTokenPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.get"></a>

```typescript
public get(index: number): ApiTokenPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiTokenPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>[]

---


### ApiTokenPoliciesOutputReference <a name="ApiTokenPoliciesOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiTokenPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.putPermissionGroups">putPermissionGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissionGroups` <a name="putPermissionGroups" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.putPermissionGroups"></a>

```typescript
public putPermissionGroups(value: IResolvable | ApiTokenPoliciesPermissionGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.putPermissionGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.permissionGroups">permissionGroups</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList">ApiTokenPoliciesPermissionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.permissionGroupsInput">permissionGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.resources">resources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.permissionGroups"></a>

```typescript
public readonly permissionGroups: ApiTokenPoliciesPermissionGroupsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList">ApiTokenPoliciesPermissionGroupsList</a>

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `permissionGroupsInput`<sup>Optional</sup> <a name="permissionGroupsInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.permissionGroupsInput"></a>

```typescript
public readonly permissionGroupsInput: IResolvable | ApiTokenPoliciesPermissionGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.resources"></a>

```typescript
public readonly resources: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiTokenPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicies">ApiTokenPolicies</a>

---


### ApiTokenPoliciesPermissionGroupsList <a name="ApiTokenPoliciesPermissionGroupsList" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiTokenPoliciesPermissionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.get"></a>

```typescript
public get(index: number): ApiTokenPoliciesPermissionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiTokenPoliciesPermissionGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>[]

---


### ApiTokenPoliciesPermissionGroupsOutputReference <a name="ApiTokenPoliciesPermissionGroupsOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer"></a>

```typescript
import { apiToken } from '@cdktf/provider-cloudflare'

new apiToken.ApiTokenPoliciesPermissionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiTokenPoliciesPermissionGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPoliciesPermissionGroups">ApiTokenPoliciesPermissionGroups</a>

---




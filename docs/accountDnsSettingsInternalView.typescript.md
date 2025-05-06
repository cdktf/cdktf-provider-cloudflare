# `accountDnsSettingsInternalView` Submodule <a name="`accountDnsSettingsInternalView` Submodule" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettingsInternalView <a name="AccountDnsSettingsInternalView" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer"></a>

```typescript
import { accountDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

new accountDnsSettingsInternalView.AccountDnsSettingsInternalView(scope: Construct, id: string, config: AccountDnsSettingsInternalViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig">AccountDnsSettingsInternalViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig">AccountDnsSettingsInternalViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct"></a>

```typescript
import { accountDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement"></a>

```typescript
import { accountDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource"></a>

```typescript
import { accountDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport"></a>

```typescript
import { accountDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountDnsSettingsInternalView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountDnsSettingsInternalView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountDnsSettingsInternalView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.modifiedTime">modifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedTime`<sup>Required</sup> <a name="modifiedTime" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.modifiedTime"></a>

```typescript
public readonly modifiedTime: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsInternalViewConfig <a name="AccountDnsSettingsInternalViewConfig" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.Initializer"></a>

```typescript
import { accountDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

const accountDnsSettingsInternalViewConfig: accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.name">name</a></code> | <code>string</code> | The name of the view. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.zones">zones</a></code> | <code>string[]</code> | The list of zones linked to this view. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_dns_settings_internal_view#account_id AccountDnsSettingsInternalView#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_dns_settings_internal_view#name AccountDnsSettingsInternalView#name}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.accountDnsSettingsInternalView.AccountDnsSettingsInternalViewConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

The list of zones linked to this view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_dns_settings_internal_view#zones AccountDnsSettingsInternalView#zones}

---




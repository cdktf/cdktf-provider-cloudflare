# `webAnalyticsRule` Submodule <a name="`webAnalyticsRule` Submodule" id="@cdktf/provider-cloudflare.webAnalyticsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAnalyticsRule <a name="WebAnalyticsRule" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

new webAnalyticsRule.WebAnalyticsRule(scope: Construct, id: string, config: WebAnalyticsRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig">WebAnalyticsRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig">WebAnalyticsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetInclusive">resetInclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetIsPaused">resetIsPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetPaths">resetPaths</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInclusive` <a name="resetInclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetInclusive"></a>

```typescript
public resetInclusive(): void
```

##### `resetIsPaused` <a name="resetIsPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetIsPaused"></a>

```typescript
public resetIsPaused(): void
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetPaths"></a>

```typescript
public resetPaths(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

webAnalyticsRule.WebAnalyticsRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

webAnalyticsRule.WebAnalyticsRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

webAnalyticsRule.WebAnalyticsRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

webAnalyticsRule.WebAnalyticsRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebAnalyticsRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebAnalyticsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebAnalyticsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput">inclusiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput">isPausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput">rulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusive">inclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPaused">isPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetId">rulesetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `inclusiveInput`<sup>Optional</sup> <a name="inclusiveInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput"></a>

```typescript
public readonly inclusiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPausedInput`<sup>Optional</sup> <a name="isPausedInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput"></a>

```typescript
public readonly isPausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `rulesetIdInput`<sup>Optional</sup> <a name="rulesetIdInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput"></a>

```typescript
public readonly rulesetIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusive"></a>

```typescript
public readonly inclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPaused"></a>

```typescript
public readonly isPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `rulesetId`<sup>Required</sup> <a name="rulesetId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetId"></a>

```typescript
public readonly rulesetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebAnalyticsRuleConfig <a name="WebAnalyticsRuleConfig" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.Initializer"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

const webAnalyticsRuleConfig: webAnalyticsRule.WebAnalyticsRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId">rulesetId</a></code> | <code>string</code> | The Web Analytics ruleset identifier. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive">inclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule includes or excludes traffic from being measured. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused">isPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is paused or not. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths">paths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}

---

##### `rulesetId`<sup>Required</sup> <a name="rulesetId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId"></a>

```typescript
public readonly rulesetId: string;
```

- *Type:* string

The Web Analytics ruleset identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}.

---

##### `inclusive`<sup>Optional</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive"></a>

```typescript
public readonly inclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule includes or excludes traffic from being measured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}

---

##### `isPaused`<sup>Optional</sup> <a name="isPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused"></a>

```typescript
public readonly isPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is paused or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}.

---




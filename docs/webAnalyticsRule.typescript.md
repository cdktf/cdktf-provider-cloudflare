# `cloudflare_web_analytics_rule`

Refer to the Terraform Registory for docs: [`cloudflare_web_analytics_rule`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule).

# `webAnalyticsRule` Submodule <a name="`webAnalyticsRule` Submodule" id="@cdktf/provider-cloudflare.webAnalyticsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAnalyticsRule <a name="WebAnalyticsRule" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}.

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
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

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

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

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

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.putTimeouts"></a>

```typescript
public putTimeouts(value: WebAnalyticsRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

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
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference">WebAnalyticsRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput">inclusiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput">isPausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput">rulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id">id</a></code> | <code>string</code> | *No description.* |
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
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeouts"></a>

```typescript
public readonly timeouts: WebAnalyticsRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference">WebAnalyticsRuleTimeoutsOutputReference</a>

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

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.idInput"></a>

```typescript
public readonly idInput: string;
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

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WebAnalyticsRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>

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

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id"></a>

```typescript
public readonly id: string;
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
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host">host</a></code> | <code>string</code> | The host to apply the rule to. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive">inclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule includes or excludes the matched traffic from being measured in Web Analytics. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused">isPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is paused or not. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths">paths</a></code> | <code>string[]</code> | A list of paths to apply the rule to. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId">rulesetId</a></code> | <code>string</code> | The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a></code> | timeouts block. |

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
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host to apply the rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive"></a>

```typescript
public readonly inclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule includes or excludes the matched traffic from being measured in Web Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused"></a>

```typescript
public readonly isPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is paused or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

A list of paths to apply the rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}

---

##### `rulesetId`<sup>Required</sup> <a name="rulesetId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId"></a>

```typescript
public readonly rulesetId: string;
```

- *Type:* string

The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WebAnalyticsRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#timeouts WebAnalyticsRule#timeouts}

---

### WebAnalyticsRuleTimeouts <a name="WebAnalyticsRuleTimeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts.Initializer"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

const webAnalyticsRuleTimeouts: webAnalyticsRule.WebAnalyticsRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#create WebAnalyticsRule#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/web_analytics_rule#create WebAnalyticsRule#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebAnalyticsRuleTimeoutsOutputReference <a name="WebAnalyticsRuleTimeoutsOutputReference" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { webAnalyticsRule } from '@cdktf/provider-cloudflare'

new webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebAnalyticsRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>

---



